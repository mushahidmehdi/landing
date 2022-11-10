import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Heading, SubHeading } from 'styles/shared';
import startegyToolImg from 'assests/images/startegy-side-tool.svg';
import uriIcon from 'assests/icons/uri-icon.svg';
import titleIcon from 'assests/icons/mob-app-title-icon.svg';
import mobApp from 'assests/images/mob-app.svg';
import AppStore from 'assests/images/app-store.svg';
import googlePlay from 'assests/images/google-play.svg';

export const StrategyTools = () => {
	const [userType, setUserType] = useState('n');
	return (
		<StrategyToolsWrapper>
			{userType === 'expert' ? (
				<>
					<StrategyToolsHeadingWrapper>
						<Heading> Strategy Creator Tool</Heading>
						<SubHeading>You are ready?</SubHeading>
					</StrategyToolsHeadingWrapper>
					<StrategyToolsBody>
						<StrategyToolsBodyLeft mt="8rem">
							<UriTitle>
								<img src={uriIcon} alt="startegyToolImg" />
								<p>No code needed.</p>
							</UriTitle>
							<p>
								Benefit from Traderlands’ built-in strategy creator tool that contains most of the
								indicators available on Tradingview to create trading strategies in minutes. You can
								also directly connect your pre-designed Tradingview strategy to backtest. After creating
								your strategy, backtest and run it on virtual trade to see how it performs in real-time
								market data.
							</p>
							<Button
								text="Get Start"
								sx={{
									marginTop: '3rem',
									padding: '0.8rem 3rem',
								}}
							/>
						</StrategyToolsBodyLeft>
						<StrategyToolsBodyRight>
							<img src={startegyToolImg} alt="startegyToolImg" />
						</StrategyToolsBodyRight>
					</StrategyToolsBody>
				</>
			) : (
				<>
					<StrategyToolsHeadingWrapper>
						<Heading>Mobile App</Heading>
						<SubHeading>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</SubHeading>
					</StrategyToolsHeadingWrapper>
					<StrategyToolsBody>
						<StrategyToolsBodyLeft>
							<img src={mobApp} alt="Mobile App" />
						</StrategyToolsBodyLeft>
						<StrategyToolsBodyRight>
							<TopParagGraph>
								<img src={titleIcon} alt="MobileIcon" />
								<p>
									Benefit from Traderlands’ built-in strategy creator tool that contains most of the
									indicators available on Tradingview to create trading strategies in minutes.
								</p>
							</TopParagGraph>
							<p>
								You can also directly connect your pre-designed Tradingview strategy to backtest. After
								creating your strategy, backtest and run it on virtual trade to see how it performs in
								real-time market data.
							</p>
							<ActionWrapperMob>
								<img src={AppStore} alt="App Store" width={200} />
								<img src={googlePlay} alt="Google Play" width={200} />
							</ActionWrapperMob>
						</StrategyToolsBodyRight>
					</StrategyToolsBody>
				</>
			)}
		</StrategyToolsWrapper>
	);
};

const StrategyToolsWrapper = styled.section``;
const StrategyToolsBody = styled.div`
	display: flex;
`;
const StrategyToolsHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block: 1rem;
`;
const StrategyToolsBodyLeft = styled.div`
	margin-top: ${({ mt }) => mt ?? '-10rem'};
	margin-inline-start: ${({ mt }) => (mt ? '4rem' : 0)};

	> p {
		margin-block-start: 2rem;
	}
`;
const StrategyToolsBodyRight = styled.div``;

const TopParagGraph = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;

	> img {
		display: flex;
		min-width: 5rem;
		height: 4.5rem;
		padding: 1rem;
	}

	p {
		margin-inline-start: 1rem;
	}
`;

const UriTitle = styled.div`
	display: flex;
	align-items: center;

	p {
		font-family: Comfortaa;
		font-size: 32px;
		font-weight: 700;
		line-height: 36px;
		margin-inline-start: 1.5rem;
		color: ${({ theme }) => theme.primary.default};
	}
`;

const ActionWrapperMob = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 2.5rem;
	/* transform: ${({ delayTwoSec }) => (delayTwoSec === 'block' ? 'translateY(0%)' : 'translateY(-300%)')};
	transition-duration: 1000ms; */
	> img {
		cursor: pointer;
	}

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.4rem;
	/* @media only screen and (min-width: 54.3rem) {
		display: none;
	} */
`;

export default StrategyTools;
