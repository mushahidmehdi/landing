import React from 'react';
import styled from 'styled-components';
import { Button, Heading } from 'styles/shared';
import uriIcon from 'assests/icons/uri-icon.svg';
import titleIcon from 'assests/icons/mob-app-title-icon.svg';
import mobApp from 'assests/images/mob-app.svg';
import mobApp2 from 'assests/images/mobApp2.svg';
import AppStore from 'assests/images/app-store.svg';
import googlePlay from 'assests/images/google-play.svg';
import strategy from 'assests/images/strategy-mp.svg';

export const StrategyTools = ({ userType }) => {
	return (
		<StrategyToolsWrapper>
			{userType === 1 ? (
				<>
					<StrategyToolsHeadingWrapper>
						<Heading> Strategy Creator Tool</Heading>
					</StrategyToolsHeadingWrapper>
					<StrategyToolsBody>
						<StrategyToolsBodyRight>
							<img src={strategy} alt="startegyToolImg" />
						</StrategyToolsBodyRight>
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
							<button>Get Start</button>
						</StrategyToolsBodyLeft>
					</StrategyToolsBody>
				</>
			) : (
				<StrategyToolsBody>
					<>
						<StrategyToolsBodyLeftMob>
							<img src={mobApp2} alt="Mobile App" />
						</StrategyToolsBodyLeftMob>
						<StrategyToolsBodyLeftDesk>
							<img src={mobApp} alt="Mobile App" />
						</StrategyToolsBodyLeftDesk>
					</>

					<StrategyToolsBodyRight>
						<h3>Mobile App</h3>
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
							<img src={AppStore} alt="App Store" width={160} />
							<img src={googlePlay} alt="Google Play" width={160} />
						</ActionWrapperMob>
					</StrategyToolsBodyRight>
				</StrategyToolsBody>
			)}
		</StrategyToolsWrapper>
	);
};

const StrategyToolsWrapper = styled.section``;

const StrategyToolsBody = styled.div`
	display: flex;
	@media only screen and (max-width: 86.188rem) {
		flex-direction: column-reverse;
	}
`;
const StrategyToolsHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block-start: 5rem;
`;

const StrategyToolsBodyLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	> button {
		margin-top: 2rem;

		padding: 0.7rem 2rem;
		width: 13rem;
		border: none;
		background-color: ${({ theme }) => theme.primary.default};
		color: ${({ theme }) => theme.gray.fff};
		font-family: Comfortaa;
		font-size: 1.1rem;
		font-weight: 700;
		line-height: 20px;
		border-radius: 0.5rem;
	}

	@media only screen and (max-width: 86.188rem) {
		> button {
			padding: 0.4rem 1rem;
			font-size: 0.85rem;
		}
	}
`;

const StrategyToolsBodyLeftDesk = styled(StrategyToolsBodyLeft)`
	margin-inline-start: -3rem;
	@media only screen and (max-width: 86.188rem) {
		display: none;
	}
`;
const StrategyToolsBodyLeftMob = styled(StrategyToolsBodyLeft)`
	display: none;
	@media only screen and (max-width: 86.188rem) {
		display: block;
		> img {
			width: 100%;
			object-fit: cover;
			height: auto;
		}
	}
`;

const StrategyToolsBodyRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	h3 {
		color: ${({ theme }) => theme.primary.default};
	}

	@media only screen and (max-width: 86.188rem) {
		margin-top: 5rem;
		> img {
			width: 100%;
			height: auto;
			justify-content: cover;
		}

		> p {
			font-family: Comfortaa;
			font-size: 0.95rem;
			font-weight: 500;
			line-height: 22px;
		}
	}
`;

const TopParagGraph = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	> img {
		display: flex;
		min-width: 5rem;
		height: 4.5rem;
		padding: 1rem;
	}

	> p {
		margin-inline-start: 1rem;
	}
	@media only screen and (max-width: 86.188rem) {
		> p {
			font-family: Comfortaa;
			font-size: 0.95rem;
			font-weight: 500;
			line-height: 22px;
		}
	}
`;

const UriTitle = styled.div`
	display: flex;
	align-items: center;

	p {
		font-family: Comfortaa;
		font-size: 2rem;
		font-weight: 700;
		line-height: 36px;
		margin-inline-start: 1.5rem;
		color: ${({ theme }) => theme.primary.default};
	}
	@media only screen and (max-width: 86.188rem) {
		display: none;
	}
`;

const ActionWrapperMob = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 2.5rem;

	> img {
		cursor: pointer;
	}

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.4rem;
`;

export default StrategyTools;
