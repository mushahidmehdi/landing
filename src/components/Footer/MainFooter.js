import React from 'react';
import styled from 'styled-components';
import { footer } from 'configs/footer';
import nameBottomLogo from 'assests/icons/logo-name-bottom.svg';
import newTab from 'assests/icons/new-tab-arrow.svg';
import youtube from 'assests/icons/yt.svg';
import twitter from 'assests/icons/tw.svg';
import instagram from 'assests/icons/insta.svg';
import telegram from 'assests/icons/telegram.svg';
import linkin from 'assests/icons/linkin.svg';
import year from 'assests/icons/year.svg';
import TrFlag from 'assests/icons/tr.svg';
import EnFlag from 'assests/icons/en.svg';

const BottomFooter = () => {
	return (
		<BottomFooterWrapper>
			<LogoWrapper>
				<img src={nameBottomLogo} alt="Logo" />
			</LogoWrapper>
			<SocailMediaIconsMobile>
				<img src={youtube} alt="youtube" />
				<img src={twitter} alt="twitter" />
				<img src={instagram} alt="instagram" />
				<img src={telegram} alt="telegram" />
				<img src={linkin} alt="linkin" />
			</SocailMediaIconsMobile>
			<FotterLinks>
				{footer.map(({ name, link }) => (
					<div>
						<FooterLink src={link}>{name}</FooterLink>
						<img src={newTab} alt="newTab" width={10} />
					</div>
				))}
			</FotterLinks>
			<SocailMediaIconsDesktop>
				<img src={youtube} alt="youtube" />
				<img src={twitter} alt="twitter" />
				<img src={instagram} alt="instagram" />
				<img src={telegram} alt="telegram" />
				<img src={linkin} alt="linkin" />
			</SocailMediaIconsDesktop>

			<Address>
				<p>Paratica Bilişim Danışmanlık ve Finansal Hizmetler A.Ş</p>
				<p>Kordonboyu Mah. Ankara Cad. 147/A İstmarina Konutları S1 Kule Kat:24 D:300</p>
				<p> Kartal/İSTANBUL</p>
			</Address>

			<YearWrapper>
				<img src={year} alt="year" />
			</YearWrapper>
		</BottomFooterWrapper>
	);
};

export default BottomFooter;

const BottomFooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5rem;
	@media only screen and (max-width: 86.188rem) {
		margin-top: 5rem;
	}
`;
const LogoWrapper = styled.div``;

const FotterLinks = styled.div`
	display: flex;
	gap: 2rem;
	margin-top: 1rem;
	> div > img {
		margin-top: 0.5rem;
		padding-top: 0.3rem;
		margin-inline-start: 0.3rem;
	}

	@media only screen and (max-width: 86.188rem) {
		flex-direction: column;
		gap: 0.6rem;
	}
`;
const Address = styled.div`
	text-align: center;
	> p {
		color: ${({ theme }) => theme.gray[100]};
	}
	@media only screen and (max-width: 86.188rem) {
		margin-top: 2rem;

		> p {
			font-size: 0.8rem;
		}
	}
`;

const FooterLink = styled.a`
	font-size: 1rem;
	font-weight: 300;
	line-height: 0.85rem;
	letter-spacing: 0em;
	text-align: right;
	color: #b5b5b5;
	text-decoration: none;
	@media only screen and (max-width: 86.188rem) {
		font-size: 0.85rem;
	}
`;

const SocailMediaIcons = styled.div`
	display: flex;
	gap: 2rem;
	margin-block: 2rem;
`;

const SocailMediaIconsDesktop = styled(SocailMediaIcons)`
	@media only screen and (max-width: 86.188rem) {
		display: none;
	}
`;
const SocailMediaIconsMobile = styled(SocailMediaIcons)`
	@media only screen and (min-width: 86.188rem) {
		display: none;
	}
`;

const LanguageWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding-block: 1.4rem;
	align-items: center;
	gap: 1rem;
	color: #b5b5b5;
`;

const YearWrapper = styled.div`
	margin-block: 1rem;
`;
