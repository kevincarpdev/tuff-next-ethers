import { signMessage } from "../utils/sign";
import Head from 'next/head';
import Navbar from "../component/common/Navbar/Navbar";
import Hero from "../component/Hero/Hero";
import Mission from "../component/Mission/Mission";
import Footer from "../component/common/Footer/Footer";
import Utility from "../component/Utility/Utility";
import Rarity from "../component/Rarity/Rarity";
import Team from "../component/Team/Team";
import ExtraImagesMarquee from '../component/common/ExtraImagesMarquee/ExtraImagesMarquee';

const Index = () => {
  
  return (
    <>
      <Head>
        <title>Tuff Guys NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      
      <main>
        <Hero signMessageFunction={signMessage} />
        <Mission />
        <Utility />
        <Rarity />
        <Team />
      </main>

      <footer id="footer">
        <Footer />
      </footer>

      <ExtraImagesMarquee />
    </>
  );
};

export default Index;
