import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
	width: 96rem;
	max-width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding-inline: 3rem;
	@media only screen and (max-width: 54.3rem) {
		padding-inline: 1rem;
	}
`;

export default Container;
