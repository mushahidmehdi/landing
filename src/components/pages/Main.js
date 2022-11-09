import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'styles/shared';
import mainPageImg from 'assests/images/mainPage.svg';
import bgGradient from 'assests/images/main-bg-gradient.svg';
import AppStore from 'assests/images/app-store.svg';
import googlePlay from 'assests/images/google-play.svg';

const Main = () => {
	const [delayFiveMiliSec, setDelayFiveMiliSec] = useState('none');
	const [delayTwoSec, setDelayTwoSec] = useState('none');

	useEffect(() => {
		setTimeout(function () {
			setDelayFiveMiliSec('block');
		}, 500);
	}, []);

	useEffect(() => {
		setTimeout(function () {
			setDelayTwoSec('block');
		}, 1000);
	}, []);

	return (
		<MainWrapper>
			<RightBody delayFiveMiliSec={delayFiveMiliSec}>
				<BgRadient delayFiveMiliSec={delayFiveMiliSec}>
					<img src={bgGradient} alt="Gradient" />
				</BgRadient>
				<h1>
					<span> Automate, Manage </span>
				</h1>
				<h1>
					<span> and Monitor Your</span>
				</h1>

				<h1>
					<span>Portfolio</span>
				</h1>
				<p>
					<span>
						Traderlands allow to turn their trading strategies into automated bots, backtesting and sharing
						their strategies on the marketplace.
					</span>
				</p>
				<WatchTurorialWrapper delayFiveMiliSec={delayFiveMiliSec}>
					<h3>
						<span>Get Started</span>
					</h3>
					<h6>
						<span>Watch Tutorials</span>
					</h6>
				</WatchTurorialWrapper>
				<ActionWrapperDesktop delayTwoSec={delayTwoSec}>
					<div>
						<Button
							text="Get Started"
							sx={{
								paddingBlock: '1rem',
							}}
						/>
						<img src={AppStore} alt="App Store" />
						<img src={googlePlay} alt="Google Play" />
					</div>
				</ActionWrapperDesktop>
			</RightBody>
			<LeftBody delayFiveMiliSec={delayFiveMiliSec}>
				<img src={mainPageImg} alt="MainPageImg" />
				<ActionWrapperMob>
					<img src={AppStore} alt="App Store" width={150} />
					<img src={googlePlay} alt="Google Play" width={150} />
				</ActionWrapperMob>
			</LeftBody>
		</MainWrapper>
	);
};

const MainWrapper = styled.section`
	display: flex;
	margin-top: 7rem;
	gap: 2rem;
	width: 94rem;
	justify-content: space-between;
	max-width: 100%;
	flex-wrap: wrap;
	/* scroll-snap-align: start; */
	margin-block-end: 10rem;

	@media screen and (max-width: 38rem) {
		margin-top: 2rem;
	}
`;

const RightBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	h1 {
		font-family: Comfortaa;
		font-size: 4rem;
		font-weight: 700;
		line-height: 71px;
		overflow: hidden;
		@media screen and (max-width: 38rem) {
			font-size: 3rem;
			font-weight: 700;
			line-height: 55px;
		}
		span {
			display: inline-block;
			transform: ${({ delayFiveMiliSec }) =>
				delayFiveMiliSec === 'block' ? 'translateY(0%)' : 'translateY(100%)'};
			transition-duration: 1000ms;
		}
	}

	p {
		margin-top: 1rem;
		font-family: Comfortaa;
		font-size: 1.2rem;
		font-weight: 500;
		line-height: 22px;
		color: ${({ theme }) => theme.gray[100]};
		display: inline-block;
		overflow: hidden;
		max-width: 36rem;

		@media screen and (max-width: 38rem) {
			font-size: 1rem;
			font-weight: 600;
			line-height: 1.15rem;
		}

		span {
			display: inline-block;
			transform: ${({ delayFiveMiliSec }) =>
				delayFiveMiliSec === 'block' ? 'translateY(0%)' : 'translateY(-100%)'};
			transition-duration: 1000ms;
		}
	}

	h6 {
		font-family: Comfortaa;
		font-size: 18px;
		font-weight: 700;
		line-height: 20px;
		font-size: 1.25rem;
		color: ${({ theme }) => theme.primary.default};
		margin-top: 3rem;
		overflow: hidden;

		@media only screen and (max-width: 54.3rem) {
			margin-top: 4rem;
		}
		@media only screen and (max-width: 444px) {
			margin-top: 3.5rem;
			font-size: 0.9rem;
		}

		span {
			display: inline-block;
			transform: ${({ delayFiveMiliSec }) =>
				delayFiveMiliSec === 'block' ? 'translateY(0%)' : 'translateY(-100%)'};
			transition-duration: 1000ms;
		}
	}
`;

const ActionWrapperDesktop = styled.div`
	overflow: hidden;
	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
		transform: ${({ delayTwoSec }) => (delayTwoSec === 'block' ? 'translateY(0%)' : 'translateY(-300%)')};
		transition-duration: 1000ms;
		> img {
			cursor: pointer;
		}
	}
	@media only screen and (max-width: 54.3rem) {
		display: none;
	}
`;

const ActionWrapperMob = styled(ActionWrapperDesktop)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.4rem;
	@media only screen and (min-width: 54.3rem) {
		display: none;
	}
`;

const LeftBody = styled.div`
	display: flex;
	flex-direction: column;
	transform: ${({ delayFiveMiliSec }) => (delayFiveMiliSec === 'block' ? 'translateX(0%)' : 'translateX(300%)')};
	transition-duration: 1000ms;

	> img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	@media only screen and (max-width: 54.3rem) {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
	}
`;

const BgRadient = styled.div`
	position: absolute;
	left: 0%;
	display: ${({ delayFiveMiliSec }) => delayFiveMiliSec};
	> img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

const WatchTurorialWrapper = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap-reverse;
	h3 {
		font-family: Comfortaa;
		font-size: 18px;
		font-weight: 400;
		line-height: 1rem;
		color: ${({ theme }) => theme.gray.fff};
		margin-top: 3rem;
		overflow: hidden;
		border-radius: 4px;
		span {
			display: inline-block;
			background-color: ${({ theme }) => theme.primary.default};
			padding: 1rem 3rem;
			transform: ${({ delayFiveMiliSec }) =>
				delayFiveMiliSec === 'block' ? 'translateY(0%)' : 'translateY(-100%)'};
			transition-duration: 1000ms;
			@media only screen and (max-width: 444px) {
				padding: 0.6rem 1.8rem;
			}
		}
		@media only screen and (max-width: 444px) {
			font-size: 0.9rem;
		}
		@media only screen and (max-width: 339px) {
			margin-top: 0;
		}
		@media only screen and (min-width: 54.3rem) {
			display: none;
		}
	}
`;

export default Main;
