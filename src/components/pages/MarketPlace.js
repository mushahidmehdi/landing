import React from 'react';
import styled from 'styled-components';
import { Heading } from 'styles/shared';
import mobImages from 'assests/images/mob.svg';
import marketPlace from 'assests/images/marketplace-mob.svg';
import startegyToolImg from 'assests/images/startegy-side-tool.svg';
import startegyLogo from 'assests/images/Strategy-logo.svg';

const MarketPlace = ({ userType }) => {
	return (
		<MarketPlaceWrapper>
			{userType === 1 ? (
				<>
					<MarketPlaceHeader>
						<Heading>Publish a Strategy and Monetize</Heading>
					</MarketPlaceHeader>
					<PublishStrategy>
						<PublishStrategyLeft>
							<p>
								Create your strategy, backtest it and apply for becoming a trading bot publisher to list
								your strategy on Traderlands marketplace.
							</p>
							<p>
								When your strategy is listed on the marketplace, other users can follow and run it which
								provides an opportunity to monetize your expertise.
							</p>
							<img src={startegyLogo} alt="Mobile" />
						</PublishStrategyLeft>
						<PublishStrategyRight>
							<img src={startegyToolImg} alt="Mobile " />
						</PublishStrategyRight>
					</PublishStrategy>
				</>
			) : (
				<>
					<MarketPlaceHeader>
						<Heading>Marketplace</Heading>
					</MarketPlaceHeader>
					<MarketPlaceBody>
						<MarketPlaceBodyLeft>
							<p>
								Search by filtering strategies to find the best trading strategy that suits your trading
								approach. Advanced filter options based on market direction, long and short, make it
								easier to find a strategy to follow in different market conditions.
							</p>
							<p>
								Historical backtest data and live trade stats are provided to help users to choose the
								best fit for their needs.
							</p>
							<img src={mobImages} alt="Mobile " />
						</MarketPlaceBodyLeft>
						<MarketPlaceBodyRight>
							<img src={marketPlace} alt="Mobile " />
						</MarketPlaceBodyRight>
					</MarketPlaceBody>
				</>
			)}
		</MarketPlaceWrapper>
	);
};

export default MarketPlace;

const MarketPlaceWrapper = styled.div`
	margin-top: -7rem;
`;

const MarketPlaceHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const MarketPlaceBody = styled.div`
	display: flex;
	justify-content: center;
`;

const MarketPlaceBodyLeft = styled.div`
	margin-top: 5rem;
	margin-inline: 8rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	> p {
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 27px;
		color: ${({ theme }) => theme.gray[100]};
	}
	@media only screen and (max-width: 86.188rem) {
		margin-inline: 0;
		> img {
			width: 100%;
			height: auto;
			justify-content: cover;
		}
		> p {
			font-size: 0.95rem;
			font-weight: 500;
			line-height: 22px;
			color: ${({ theme }) => theme.gray[100]};
		}
	}
`;

const MarketPlaceBodyRight = styled.div`
	margin-top: 5rem;
	width: 100%;
	@media only screen and (max-width: 86.188rem) {
		display: none;
	}
`;

const PublishStrategy = styled.div`
	display: flex;
	margin-block-start: 5rem;
	position: relative;
	@media only screen and (max-width: 86.188rem) {
		flex-direction: column-reverse;
	}
`;

const PublishStrategyLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 3rem;

	> p {
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 27px;
		padding-inline: 6rem;
		padding-block-start: 2rem;
	}
	> img {
		max-width: 100%;
		margin-top: -6rem;
	}

	@media only screen and (max-width: 86.188rem) {
		border: 1px solid red;
		> p {
			padding-inline: 0rem;
			font-size: 0.95;
			font-weight: 500;
			line-height: 22px;
		}
	}
`;

const PublishStrategyRight = styled.div`
	@media only screen and (max-width: 86.188rem) {
		margin-inline-end: -2rem;
		img {
			width: 100%;
			height: auto;
			justify-content: cover;
		}
	}
`;
