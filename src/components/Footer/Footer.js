import React from 'react';
import FooterBottomBanner from './FooterBottomBanner';
import FooterMainImage from './FooterMainImage';
import FooterUpperBanner from './FooterUpperBanner';
import MainFooter from './MainFooter';

const Footer = ({ userType }) => {
	return (
		<>
			<FooterUpperBanner />
			<FooterMainImage userType={userType} />
			<FooterBottomBanner />
			<MainFooter />
		</>
	);
};

export default Footer;
