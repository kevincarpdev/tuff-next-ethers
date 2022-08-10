import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image'
import s from "./CharBuilder.module.css";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import Background from "../../public/img/traits/Backgrounds/Blue Doodles.png";
import Skin from "../../public/img/traits/Colors/Blue Skin.png";
import Head from "../../public/img/traits/Colors/Default Head.png";
import Hair from "../../public/img/traits/Headwear/Elvis Hair.png";
import Tears from "../../public/img/traits/Tears/Tears 6.png";
import Headwear from "../../public/img/traits/Headwear/Army Helmet.png";
import Mouthwear from "../../public/img/traits/Mouthwear/Mouthwear colors/Liquid Beard Pink.png";
import Clothes from "../../public/img/traits/Clothes/Emperor.png";
import { FaQuestion } from "react-icons/fa";
import {motion, useMotionValue, useTransform } from "framer-motion";
import 'swiper/css';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


export default function CharBuilder({mintCharacter}) {
	const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);

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
      .mint(blockchain.account, mintAmount)
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

	return (
		<>
			<section id="builder" className={cn(s.root)}>
				<div className="container">
					<div className={s.fuseWindow}>
						<div className={s.nftPanel}>
							<h2 className={s.nftRowHeader}>My Tuff Guys</h2>
							<div >
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
									<SwiperSlide key="NFT1" >
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
									<SwiperSlide key="NFT2">
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
									
								</Swiper>
							</div>
						</div>
						<div className={s.fuseRow}>
							<div className={s.fuseStage}>
								<div className={s.stepPanel}>
										<div className={s.fuseImages}>
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
													src={Head}
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
										<>
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
												<span
													style={{
														textAlign: "center",
														color: "var(--accent-text)",
													}}
												>
													Connect to the {CONFIG.NETWORK.NAME} network
												</span>
												<button
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
												<div
													style={{
														textAlign: "center",
														color: "var(--accent-text)",
													}}
												>
													{feedback}
												</div>
												<div>
													<button
														style={{ lineHeight: 0.4 }}
														disabled={claimingNft ? 1 : 0}
														onClick={(e) => {
															e.preventDefault();
															decrementMintAmount();
														}}
													>
														-
													</button>
													<div
														style={{
															textAlign: "center",
															color: "var(--accent-text)",
														}}
													>
														{mintAmount}
													</div>
													<button
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
              	</>
									</div>
									{/* <button className={s.mintButton} onClick={() => this.saveDressup()}>
										Mint
									</button> */}
									
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
