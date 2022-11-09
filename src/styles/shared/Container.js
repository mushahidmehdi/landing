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
	padding-inline: 2rem;
`;

export default Container;
