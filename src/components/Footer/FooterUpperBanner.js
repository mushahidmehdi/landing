import React from 'react';
import styled from 'styled-components';
import blueBanner from 'assests/images/blue-banner.svg';
import Button from 'styles/shared/Button';

const TopFooter = () => {
	return (
		<FooterUpperBanner banner={blueBanner}>
			<h3>Automate, Manage and Monitor Your Portfolio</h3>
			<ButtonWrapper>
				<Button
					text={'Get Start'}
					sx={{
						backgroundColor: '#6A1FC2',
						paddingInline: '3rem',
					}}
				/>
			</ButtonWrapper>
		</FooterUpperBanner>
	);
};

export default TopFooter;

const FooterUpperBanner = styled.div`
	background-image: url(${({ banner }) => banner});
	height: 10rem;
	display: flex;
	justify-content: space-between;

	padding-inline: 5rem;
	> h3 {
		color: ${({ theme }) => theme.gray.fff};
		max-width: 33rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (max-width: 54.3rem) {
		display: none;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
