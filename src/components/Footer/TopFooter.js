import React from 'react';
import styled from 'styled-components';
import footerAnima from 'assests/images/footer-anima.svg';
import footerLetsGo from 'assests/images/footer-lets-go.svg';
import footerRight from 'assests/images/footer-right.svg';

const TopFooter = () => {
	return (
		<TopFooterWrapper>
			<TopFooterBody>
				<LeftFooter>
					<img src={footerAnima} alt="footerAnima" />
				</LeftFooter>
				<img
					src={footerRight}
					alt="footerRight"
					style={{
						position: 'absolute',
						right: '0%',
					}}
				/>
			</TopFooterBody>
		</TopFooterWrapper>
	);
};

export default TopFooter;

const TopFooterWrapper = styled.div`
	height: 11rem;
	background-color: ${({ theme }) => theme.primary.default};
	margin-block: 8rem;
`;

const TopFooterBody = styled.div`
	display: flex;
	width: 144rem;
	max-width: 100%;
	background-color: ${({ theme }) => theme.primary.default};
`;

const LeftFooter = styled.div`
	width: 50%;
	position: relative;

	> img {
		position: absolute;
		left: 20%;
	}
`;
