import React from 'react';
import styled from 'styled-components';
import arrowSvg from 'assests/images/arrow.svg';
import { Heading, SubHeading } from 'styles/shared';

const HowWork = () => {
	return (
		<HowWorkWrapper>
			<Heading>How does it work?</Heading>
			<SubHeadingWrapper>
				<SubHeading>
					Traderlands is the platform where you can find hundreds of tools to manage your portfolio
					efficiently.
				</SubHeading>
			</SubHeadingWrapper>
			<ArrowImageWrapper>
				<img src={arrowSvg} alt="How it Work" />
			</ArrowImageWrapper>
		</HowWorkWrapper>
	);
};

export default HowWork;

const HowWorkWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	@media only screen and (max-width: 54.3rem) {
		margin-top: 3rem;
	}
`;

const SubHeadingWrapper = styled.div`
	display: none;
	margin-block: 1rem;
	@media only screen and (max-width: 54.3rem) {
		display: block;
	}
`;

const ArrowImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;
