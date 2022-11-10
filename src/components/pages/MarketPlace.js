import React from 'react';
import styled from 'styled-components';
import { Heading, SubHeading } from 'styles/shared';
import mobImages from 'assests/images/mob.svg';
import marketPlace from 'assests/images/marketplace-mob.svg';

const MarketPlace = () => {
	return (
		<MarketPlaceWrapper>
			<MarketPlaceHeader>
				<Heading>Marketplace</Heading>
				<SubHeading>You are ready?</SubHeading>
			</MarketPlaceHeader>
			<MarketPlaceBody>
				<MarketPlaceBodyLeft>
					<p>
						Search by filtering strategies to find the best trading strategy that suits your trading
						approach. Advanced filter options based on market direction, long and short, make it easier to
						find a strategy to follow in different market conditions.
					</p>
					<p>
						Historical backtest data and live trade stats are provided to help users to choose the best fit
						for their needs.
					</p>
					<img src={mobImages} alt="Mobile " />
				</MarketPlaceBodyLeft>
				<MarketPlaceBodyRight>
					<img src={marketPlace} alt="Mobile " />
				</MarketPlaceBodyRight>
			</MarketPlaceBody>
		</MarketPlaceWrapper>
	);
};

export default MarketPlace;

const MarketPlaceWrapper = styled.div``;

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
		font-size: 1.2rem;
		font-weight: 500;
		line-height: 27px;
		color: ${({ theme }) => theme.gray[100]};
	}
`;
const MarketPlaceBodyRight = styled.div`
	margin-top: 5rem;
`;
