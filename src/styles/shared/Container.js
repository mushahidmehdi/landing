import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
	width: 94rem;
	max-width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding-inline: 2rem;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	/* height: 100vh; */
`;

export default Container;
