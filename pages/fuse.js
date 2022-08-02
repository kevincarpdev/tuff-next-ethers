import { nftContractAddress } from '../config.js'
import Loader from 'react-loader-spinner'
import NFT from '../utils/TuffGuysNFT.json'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Navbar from "../component/common/Navbar/Navbar";

// store
import Web3Context from '../store/web3Context'

// components
import NFTCard from '../component/NFTCard'
import NoMints from '../component/NoMints'

import { ethers } from 'ethers';
import Footer from "../component/common/Footer/Footer";
import CharBuilder from "../component/CharBuilder/CharBuilder";
import ExtraImagesMarquee from '../component/common/ExtraImagesMarquee/ExtraImagesMarquee';

// Import the deployed addresses
import contracts from '../utils/contracts';

export default function Fuse() {
  const { simpleMint, address } = useContext(Web3Context)
  const [nfts, setNfts] = useState([])
  const [mintedNFT, setMintedNFT] = useState(null)
  const [miningStatus, setMiningStatus] = useState(null)
  const [loadingState, setLoadingState] = useState(0)
  const [txError, setTxError] = useState(null)
  const [currentAccount, setCurrentAccount] = useState('')
  const [correctNetwork, setCorrectNetwork] = useState(false)

  // Checks if wallet is connected
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window
    if (ethereum) {
      console.log('Got the ethereum obejct: ', ethereum)
    } else {
      console.log('No Wallet found. Connect Wallet')
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      console.log('Found authorized Account: ', accounts[0])
      setCurrentAccount(accounts[0])
    } else {
      console.log('No authorized account found')
    }
  }

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId' })
      console.log('Connected to chain:' + chainId)

      const rinkebyChainId = '0x4'

      const devChainId = 1337
      const localhostChainId = `0x${Number(devChainId).toString(16)}`

      if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
        alert('You are not connected to the Rinkeby Testnet!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const rinkebyChainId = '0x4'

    const devChainId = 1337
    const localhostChainId = `0x${Number(devChainId).toString(16)}`

    if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
      setCorrectNetwork(false)
    } else {
      setCorrectNetwork(true)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
    checkCorrectNetwork()
  }, [])

  // Creates transaction to mint NFT on clicking Mint Character button
  const mintCharacter = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const nftContract = new ethers.Contract(
          nftContractAddress,
          NFT.abi,
          signer
        )

        let nftTx = await nftContract.createEternalNFT()
        console.log('Mining....', nftTx.hash)
        setMiningStatus(0)

        let tx = await nftTx.wait()
        setLoadingState(1)
        console.log('Mined!', tx)
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
        )

        getMintedNFT(tokenId)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log('Error minting character', error)
      setTxError(error.message)
    }
  }

  // Gets the minted NFT data
  const getMintedNFT = async (tokenId) => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const nftContract = new ethers.Contract(
          nftContractAddress,
          NFT.abi,
          signer
        )

        let tokenUri = await nftContract.tokenURI(tokenId)
        let data = await axios.get(tokenUri)
        let meta = data.data

        setMiningStatus(1)
        setMintedNFT(meta.image)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
      setTxError(error.message)
    }
  }


  // once connected a wallet load the nfts
  useEffect(() => {
    if (simpleMint && address) {
      loadNfts()
    }
  }, [simpleMint, address])

  // const { signer, network } = useContext(Web3Context);


  // useEffect(() => {
  //   if (signer) {
  //     loadContracts();
  //   }
  // }, [signer]);
  async function loadNfts() {
    let nfts = await simpleMint.tokensOf(address)

    // tokensOf returns a Token ID and a Token URI
    // we need to retrive and parse that data
    nfts = await Promise.all(
      nfts.map(async (nft) => {
        // token as returned from the smart-contract
        let [metadata, tokenId] = nft

        // parsing the token id
        tokenId = tokenId.toString()
        // fetching the metadata
        metadata = await axios.get(metadata).then((res) => res.data)

        return { metadata, tokenId }
      })
    )

    setNfts(nfts)
  }

  return (
    <div>
      <Head>
        <title>Tuff Guys | Fuse</title>
      </Head>
      <Navbar />
      <main>
          
          {currentAccount === '' ? (
            <button
              className='text-2xl font-bold py-3 px-12 bg-black shadow-lg shadow-[#6FFFE9] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          ) : correctNetwork ? (
            <>
            <CharBuilder />
            </>
            
          ) : (
            <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
              <div>----------------------------------------</div>
              <div>Please connect to the Rinkeby Testnet</div>
              <div>and reload the page</div>
              <div>----------------------------------------</div>
            </div>
          )}

          {nfts.length == 0 && <NoMints />}
          {loadingState === 0 ? (
            miningStatus === 0 ? (
              txError === null ? (
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-lg font-bold'>
                    Processing your transaction
                  </div>
                  <Loader
                    className='flex justify-center items-center pt-12'
                    type='TailSpin'
                    color='#d3d3d3'
                    height={40}
                    width={40}
                  />
                </div>
              ) : (
                <div className='text-lg text-red-600 font-semibold'>{txError}</div>
              )
            ) : (
              <div></div>
            )
          ) : (
            <div className='flex flex-col justify-center items-center'>
              <div className='font-semibold text-lg text-center mb-4'>

              </div>
              <img
                src={mintedNFT}
                alt=''
                className='h-60 w-60 rounded-lg shadow-2xl shadow-[#6FFFE9] hover:scale-105 transition duration-500 ease-in-out'
              />
            </div>
          )}
        
        {nfts.length != 0 && (
          <div className="sm: grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3">
            <CharBuilder mintCharacter={mintCharacter} />
            {nfts.map((nft, i) => (
              <NFTCard key={i} data={nft} />
            ))}
          </div>
        )}
        
      </main>
      <footer>
        <Footer />
      </footer>
      <ExtraImagesMarquee />
    </div>
  );

}
