import React from 'react';
import styled from 'styled-components';
import arrowSvg from 'assests/images/arrow.svg';
import { Heading, SubHeading } from 'styles/shared';

const HowWork = () => {
	return (
		<HowWorkWrapper>
			<Heading>How does it work?</Heading>
			<SubHeading>
				Traderlands is the platform where you can find hundreds of tools to manage your portfolio efficiently.
			</SubHeading>
			<ArrowImageWrapper>
				<img src={arrowSvg} alt="How it Work" />
			</ArrowImageWrapper>
		</HowWorkWrapper>
	);
};

export default HowWork;

const HowWorkWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ArrowImageWrapper = styled.div`
	display: flex;
`;
