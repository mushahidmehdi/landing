import React from 'react';
import styled from 'styled-components';
import bgBluerImg from 'assests/images/bg-q.svg';
import footer from 'assests/images/footer-anima.svg';

const FooterBottomBanner = () => {
	return (
		<FooterBottomBannerWrapper>
			<RightFooterImage>
				<AnimaWrapper>
					<img src={footer} alt="footer" />
				</AnimaWrapper>
				<GetStartWrapper>
					<p>Learning Center</p>
					<button>Go</button>
				</GetStartWrapper>
			</RightFooterImage>
			<LeftFooterImage bgBluerImg={bgBluerImg}>
				<p>Get Social Trading Updates Keep your knowledge up-to-date</p>
				<InputWrapper>
					<input type="text" />
					<button>Submit</button>
				</InputWrapper>
			</LeftFooterImage>
		</FooterBottomBannerWrapper>
	);
};

const FooterBottomBannerWrapper = styled.div`
	background-color: ${({ theme }) => theme.primary.default};
	height: 11rem;
	display: flex;
`;

const RightFooterImage = styled.div`
	width: 50%;
	display: flex;
`;

const AnimaWrapper = styled.div`
	position: relative;
	display: flex;
	flex: 1;
	> img {
		position: absolute;
		top: -30%;
		left: 20%;
	}
`;

const LeftFooterImage = styled.div`
	width: 50%;
	background-image: url(${({ bgBluerImg }) => bgBluerImg});
	color: ${({ theme }) => theme.gray.fff};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-inline-start: 3rem;
	p {
		font-size: 1.6rem;
		font-weight: 700;
		line-height: 28px;
		max-width: 28rem;
	}
`;

const InputWrapper = styled.div`
	margin-top: 0.8rem;
	> input {
		height: 44px;
		width: 402px;
		border-radius: 8px;
		outline: none;
		border: none;
		background-color: #9fa6f6;
		font-size: 1.3rem;
		font-weight: 500;
		color: ${({ theme }) => theme.gray.fff};
		text-indent: 1rem;
	}

	> button {
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 700;
		margin-inline-start: 1rem;
		padding: 0.9rem 2rem;
		outline: none;
		border: none;
		background-color: ${({ theme }) => theme.primary.default};
		color: ${({ theme }) => theme.gray.fff};
	}
`;

const GetStartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	color: ${({ theme }) => theme.gray.fff};

	> p {
		font-size: 1.3rem;
		font-weight: 700;
		line-height: 28px;
		color: ${({ theme }) => theme.gray.fff};
	}

	> button {
		margin-top: 1rem;
		height: 2.5rem;
		width: 9rem;
		outline: none;
		border: none;
		font-size: 1rem;
		border-radius: 8px;
		color: ${({ theme }) => theme.gray.fff};
		background-color: rgba(255, 255, 255, 0.15);
	}
`;

export default FooterBottomBanner;
