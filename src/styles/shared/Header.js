import React from 'react';
import styled from 'styled-components';

const Heading = ({ children }) => {
	return <HeadingWrapper>{children}</HeadingWrapper>;
};

const HeadingWrapper = styled.h1`
	font-family: Comfortaa;
	font-size: 2.2rem;
	font-weight: 700;
	line-height: 3rem;
	color: ${({ theme }) => theme.primary.default};
	text-align: center;
	margin-block-start: 2rem;
	padding-inline: 1rem;

	@media only screen and (max-width: 54.3rem) {
		font-size: 1.8rem;
		font-weight: 500;
		line-height: 2rem;
	}
`;

export default Heading;
