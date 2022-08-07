import React, { useState, useEffect } from "react";
import Image from 'next/image'
import s from "./CharBuilder.module.css";
import cn from "classnames";
// import { useSnackbar } from "notistack";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

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

export default function CharBuilder({mintCharacter}) {
	// const { Moralis } = useMoralis();
	// const { user, setUserData, loading } = props;
	// const [NFTs, setNFTs] = useState([]);

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
									<SwiperSlide key="NFT3">
										<motion.a
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 1.0 }}
											className={s.nftItem}
										>
											<FaQuestion size={70} />
										</motion.a>
									</SwiperSlide>
									<SwiperSlide key="NFT4">
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
									</div>
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
