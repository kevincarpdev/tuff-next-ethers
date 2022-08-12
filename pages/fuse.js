import { useContext, useState, useEffect } from 'react'
import { nftContractAddress } from '../config.js'
//import Loader from 'react-loader-spinner'
import NFT from '../utils/TuffGuysNFT.json'
import axios from 'axios'
import Head from 'next/head'
import Navbar from "../component/common/Navbar/Navbar";
import Web3Context from '../store/web3Context'
import NFTCard from '../component/NFTCard'
import { ethers } from 'ethers';
import Footer from "../component/common/Footer/Footer";
import ExtraImagesMarquee from '../component/common/ExtraImagesMarquee/ExtraImagesMarquee';
import Image from 'next/image'
import s from "../component/CharBuilder/CharBuilder.module.css";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { FaQuestion } from "react-icons/fa";
import { motion, useMotionValue } from "framer-motion";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Background from "../public/img/traits/Backgrounds/Blue Doodles.png";
import Skin from "../public/img/traits/Colors/Blue Skin.png";
import HeadSkin from "../public/img/traits/Colors/Default Head.png";
import Hair from "../public/img/traits/Headwear/Elvis Hair.png";
import Tears from "../public/img/traits/Tears/Tears 6.png";
import Headwear from "../public/img/traits/Headwear/Army Helmet.png";
import Mouthwear from "../public/img/traits/Mouthwear/Mouthwear colors/Liquid Beard Pink.png";
import Clothes from "../public/img/traits/Clothes/Emperor.png";

export default function Fuse() {
  const { simpleMint, address } = useContext(Web3Context)
  const [nfts, setNfts] = useState([])
  const [mintedNFT, setMintedNFT] = useState(null)
  const [miningStatus, setMiningStatus] = useState(null)
  const [loadingState, setLoadingState] = useState(0)
  const [txError, setTxError] = useState(null)
  const [haveMetamask, sethaveMetamask] = useState(true);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [fetchingNfts, setFetchingNfts] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);


  const [client, setclient] = useState({
    isConnected: false,
  });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  function next(item) {
    const next_num = dressupState[item].current + 1;
    // if next_num exceeds total, restart (set current to 0)
    const new_current = next_num < dressupState[item].total ? next_num : 0;
    updateDressUp(item, new_current);
  }

  function updateDressUp(item, new_current) {
    setDressupState({
      ...dressupState,
      [item]: {
        current: (dressupState[item].current = new_current),
        total: dressupState[item].total,
      },
    });
  }

  function randomize() {
    Object.keys(dressupState).map((item) =>
      updateDressUp(
        item,
        Math.floor(Math.random() * Math.floor(dressupState[item].total)),
      ),
    );
  }

  const [dressupState, setDressupState] = useState({
    Backgrounds: { current: 0, total: 31 },
    Clothes: { current: 0, total: 57 },
    Colors: { current: 0, total: 19 },
    Headwear: { current: 0, total: 66 },
    Mouthwear: { current: 0, total: 49 },
    Tears: { current: 0, total: 13 },
  });

  const x = useMotionValue(0)

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Fusing your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .purchase_preSale(blockchain.account)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      loadNfts();
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
     
  }, [blockchain.account]);


  useEffect(() => {
    checkConnection();
  }, []);

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

  const loadNfts = async () => {

    setFetchingNfts(true);
    blockchain.smartContract.methods.purchase_preSale(blockchain.account)

    //let nfts = blockchain.smartContract.methods.ownerOf(blockchain.account).call();
    // console.log("NFTS: ", nfts)
    // // tokensOf returns a Token ID and a Token URI
    // // we need to retrive and parse that data
    // nfts = await Promise.all(
    //   nfts.map(async (nft) => {
    //     // token as returned from the smart-contract
    //     let [metadata, tokenId] = nft

    //     // parsing the token id
    //     tokenId = tokenId.toString()
    //     // fetching the metadata
    //     metadata = await axios.get(metadata).then((res) => res.data)

    //     return { metadata, tokenId }
    //   })
    // )
    // setNfts(nfts)
  }

  return (
    <div>
      <Head>
        <title>Tuff Guys | Fuse</title>
      </Head>
      <Navbar />
      <main>
        {client.isConnected ? (
          <>
            {/* {nfts.length != 0 && ( */}
            <section id="builder" className={cn(s.root)}>
              <div className="container">
                <div className={s.fuseWindow}>
                  <div className={s.nftPanel}>
                    <h2 className={s.nftRowHeader}>My Tuff Guys</h2>
                    <div>
                      <Swiper
                        breakpoints={{
                          640: {
                            width: 640,
                            slidesPerView: 1,
                          },
                          768: {
                            width: 768,
                            slidesPerView: 2,
                          },
                          1024: {
                            width: 1024,
                            slidesPerView: 4,
                          },
                        }}
                        className={s.nftRow}
                      >
                          {nfts.map((nft, i) => (
                            <SwiperSlide key="NFT1" >
                              <motion.a
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 1.0 }}
                                className={s.nftItem}
                              >
                                <FaQuestion size={70} />
                                <NFTCard key={i} data={nft} />
                              </motion.a>
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className={s.fuseRow}>
                    <div className={s.fuseStage}>
                      <div className={s.stepPanel}>
                        <div className={s.fuseImages}>
                          <div className={s.fuseImageContainer}>
                            <div className={cn(s.fuseImg, s.bgImage)}>
                              <Image
                                src={Background}
                                alt="Background"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.head)}>
                              <Image
                                src={HeadSkin}
                                alt="Head"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.skin)}>
                              <Image
                                src={Skin}
                                alt="Skin"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.hair)}>
                              <Image
                                src={Hair}
                                alt="Hair"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.tears)}>
                              <Image
                                src={Tears}
                                alt="Tears"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.headwear)}>
                              <Image
                                src={Headwear}
                                alt="Headwear"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.mouthwear)}>
                              <Image
                                src={Mouthwear}
                                alt="Mouthwear"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                            <div className={cn(s.fuseImg, s.clothes)}>
                              <Image
                                src={Clothes}
                                alt="Clothes"
                                layout={`fill`}
                                quality="85"
                                placeholder="blur"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          
                        </div>
                        {/* {Object.keys(dressupState).map((item) => (
											<div
												id={item}
												className={item + (dressupState[item].current + 1)}
												key={item}
											></div>
										))} */}
                        <div className={s.controls}>
                          <div className={s.traitSliders}>
                            {Object.keys(dressupState).map((item) => (
                              <div className={s.traitItem} key={item}>
                                <h4 className={s.traitHeader}>{item}</h4>
                                <div>
                                  <div className={s.traitBrowser}>
                                    <a className={cn(s.traitAction, s.left)}>
                                      <i className={cn(s.arrow, s.leftArrow)}></i>
                                    </a>
                                    <h5>{item}</h5>
                                    <a className={cn(s.traitAction, s.right)}>
                                      <i className={cn(s.arrow, s.rightArrow)}></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={s.mintContainer}>
                    <div
                      style={{ textAlign: "center", color: "var(--accent-text)" }}
                    >
                      1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                      {CONFIG.NETWORK.SYMBOL}.
                    </div>
                    <span
                      style={{ textAlign: "center", color: "var(--accent-text)" }}
                    >
                      Excluding gas fees.
                    </span>
                    {blockchain.account === "" ||
                      blockchain.smartContract === null ? (
                      <div>
                        <span>
                          Connect to the {CONFIG.NETWORK.NAME} network
                        </span>
                        <button
                          className={cn("button",s.mintBtn)}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          CONNECT
                        </button>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <span
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              {blockchain.errorMsg}
                            </span>
                          </>
                        ) : null}
                      </div>
                    ) : (
                      <>
                        <div>
                          {feedback}
                        </div>
                        <div className={s.mintQtyContainer}>
                          <button
                            className={cn("button", s.buttonQty)}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </button>
                          <div className={s.mintAmount}>
                            {mintAmount}
                          </div>
                          <button
                            className={cn("button", s.buttonQty)}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <button
                            className={cn("button", s.mintBtn)}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            {claimingNft ? "FUSING" : "FUSE"}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
            <></>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
      <ExtraImagesMarquee />
    </div>
  );
}
// {
//   loadingState === 0 ? (
//     miningStatus === 0 ? (
//       txError === null ? (
//         <div className='flex flex-col justify-center items-center'>
//           <div className='text-lg font-bold'>
//             Processing your transaction
//           </div>
//           <Loader
//             className='flex justify-center items-center pt-12'
//             type='TailSpin'
//             color='#d3d3d3'
//             height={40}
//             width={40}
//           />
//         </div>
//       ) : (
//         <div className='text-lg text-red-600 font-semibold'>{txError}</div>
//       )
//     ) : (
//       <div></div>
//     )
//   ) : (
//   <div className='flex flex-col justify-center items-center'>
//     <div className='font-semibold text-lg text-center mb-4'>

//     </div>
//     <img
//       src={mintedNFT}
//       alt=''
//       className='h-60 w-60 rounded-lg shadow-2xl shadow-[#6FFFE9] hover:scale-105 transition duration-500 ease-in-out'
//     />
//   </div>
// )
// }