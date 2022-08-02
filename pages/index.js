import { useState, useEffect } from "react";
import { signMessage } from "../utils/sign";
import Head from 'next/head';
import Link from "next/link";
import Metamask from "../component/metamask";
import Hero from "../component/Hero/Hero";
import Footer from "../component/common/Footer/Footer";
import Utility from "../component/Utility/Utility";
import Rarity from "../component/Rarity/Rarity";
import Team from "../component/Team/Team";
import ExtraImagesMarquee from '../component/common/ExtraImagesMarquee/ExtraImagesMarquee';

const Index = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);

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

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <>
      <Head>
        <title>Tuff Guys NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <nav className="d-flex">
        <div>
          <h3>MENU</h3>
        </div>
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          <div>
            <button className="button" onClick={connectWeb3}>
              {client.isConnected ? (
                <>
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </button>
          </div>
          <div>
            <Link href="https://twitter.com/tuffguysnft">
              <button className="btn tw-btn">TG</button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar end */}

        <main>
        <Hero signMessageFunction={signMessage} />
        <Utility />
        <Rarity />
        <Team />
        </main>
        <footer>
          <Footer />
        </footer>
      <ExtraImagesMarquee />
    </>
  );
};

export default Index;
