import React from 'react';
import styled from 'styled-components';

const SubHeading = ({ children }) => {
	return <Subheading>{children}</Subheading>;
};

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

export default SubHeading;
