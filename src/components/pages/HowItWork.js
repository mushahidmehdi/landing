import React from 'react';
import styled from 'styled-components';

import arrowSvg from 'assests/images/arrow.svg';
import ToggleUser from './ToggleUserButon';

const HowWork = () => {
	return (
		<HowWorkWrapper>
			<Heading>How does it work?</Heading>
			<Subheading>
				Traderlands is the platform where you can find hundreds of tools to manage your portfolio efficiently.
			</Subheading>
			<ArrowImageWrapper>
				<img src={arrowSvg} alt="How it Work" />
			</ArrowImageWrapper>
		</HowWorkWrapper>
	);
};

export default HowWork;

const HowWorkWrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ArrowImageWrapper = styled.div`
	display: flex;
`;

const Heading = styled.h1`
	font-family: Comfortaa;
	font-size: 2.2rem;
	font-weight: 700;
	line-height: 3rem;
	color: ${({ theme }) => theme.primary.default};
	text-align: center;
	margin-block-start: 2rem;
`;

const Subheading = styled.p`
	font-family: Comfortaa;
	font-size: 1.05rem;
	font-weight: 500;
	line-height: 1.2rem;
	max-width: 32rem;
	text-align: center;
	color: ${({ theme }) => theme.gray[100]};
	letter-spacing: 0em;
`;
