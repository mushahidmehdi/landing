import React from 'react';
import styled from 'styled-components';
import userImg from 'assests/images/users-img.svg';
import walkingMan from 'assests/images/walking-man.svg';

const FooterMainImage = ({ userType }) => {
	return (
		<FooterMainImageWrapper bgImg={userType === 1 ? walkingMan : userImg}>
			{userType === 1 ? (
				<>
					<h5>Create a Social Trading Community</h5>
					<p>
						With Traderlands, trading on major exchanges becomes social. Never feel alone on your trading
						journey. Read the latest market news on stories and interact with expert traders. Traderlands
						offers a broad array of social features that extend well beyond the trading platform and strives
						to be a platform for people all around the world to connect and share their trading expertise.
					</p>
				</>
			) : (
				<>
					<h5>Become a part of a Social Trading Community</h5>
					<p>
						Traderlands makes trading social. Publish your strategy on the marketplace, create a community
						of your strategy, reach more users, interact with them and increase the usage of your strategy.
					</p>
				</>
			)}
		</FooterMainImageWrapper>
	);
};

export default FooterMainImage;

const FooterMainImageWrapper = styled.div`
	background-image: url(${({ bgImg }) => bgImg});
	background-repeat: no-repeat;
	background-size: cover;
	color: ${({ theme }) => theme.gray.fff};
	height: 53rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-inline: 5rem;
	> h5 {
		font-size: 2.3rem;
		font-weight: 700;
		line-height: 45px;
		max-width: 32rem;
		margin-block-end: 5rem;
	}

	> p {
		font-size: 1.3rem;
		font-weight: 500;
		line-height: 27px;
		max-width: 32rem;
	}
`;
