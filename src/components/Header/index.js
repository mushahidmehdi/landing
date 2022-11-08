import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'styles/shared';
import logo from 'assests/icons/Logo.svg';
import shade from 'assests/images/top-shade.svg';
import gradientTop from 'assests/images/mobile-top-grad.svg';
import gradientBottom from 'assests/images/mob-bottom-grad.svg';
import tyIcon from 'assests/socail-media/yt.svg';
import cloudIcon from 'assests/socail-media/cloud.svg';
import robIcon from 'assests/socail-media/rob.svg';
import twIcon from 'assests/socail-media/tw.svg';
import AppStore from 'assests/images/app-store.svg';
import googlePlay from 'assests/images/google-play.svg';

import { navigations } from 'configs/navigations';

const Header = () => {
	const [activeTab, setActiveTab] = useState();
	const [delayFiveSec, setDelayFiveSec] = useState('none');
	const [closeMenu, setCloseMenu] = useState(true);

	useEffect(() => {
		setTimeout(function () {
			setDelayFiveSec('block');
		}, 100);
	}, []);

	return (
		<HeaderWrapper>
			<DesktopDisplay delayFiveSec={delayFiveSec}>
				<Logo>
					<img src={logo} alt="Logo Trader land" />
				</Logo>
				<Navigations>
					{navigations.map(({ name, link }, idx) => (
						<Nav key={idx} href="#" name={name} activeTab={activeTab} onClick={() => setActiveTab(name)}>
							{name}
						</Nav>
					))}
				</Navigations>
				<TopShadeWrapper>
					<img src={shade} alt="shade" />
				</TopShadeWrapper>
				<Button text={'Get Start'} />
			</DesktopDisplay>

			<TabletDisplay>
				<Logo>
					<img src={logo} alt="Logo Trader land" width={40} />
				</Logo>
				<Hamburger closeMenu={closeMenu} onClick={() => setCloseMenu(!closeMenu)}>
					<span className="line" />
					<span className="line" />
					<span className="line" />
				</Hamburger>
				<MobileSideBar closeMenu={closeMenu}>
					<TopGradient>
						<img src={gradientTop} alt="Gradient Top" width={300} />
					</TopGradient>

					<NavWrapper>
						{navigations.map(({ name, link }, idx) => (
							<NavItem
								key={idx}
								href={link}
								name={name}
								activeTab={activeTab}
								onClick={() => setActiveTab(name)}
							>
								{name}
							</NavItem>
						))}
						<SocailMedia>
							<img src={tyIcon} alt="youtube" width={30} />
							<img src={cloudIcon} alt="cloud" width={30} />
							<img src={robIcon} alt="Rob" width={30} />
							<img src={twIcon} alt="Twitter" width={30} />
							<img src={AppStore} alt="App Store" width={100} />
							<img src={googlePlay} alt="Google Play" width={100} />
						</SocailMedia>
					</NavWrapper>
					<BottomGradient>
						<img src={gradientBottom} alt="Gradient Bottom" width={300} />
					</BottomGradient>
				</MobileSideBar>
			</TabletDisplay>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	margin: 0 auto;
`;

const Logo = styled.div`
	z-index: 999;
`;

const Navigations = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 1.6rem;
`;

const Nav = styled.a`
	text-decoration: none;
	color: ${({ activeTab, name }) => (name === activeTab ? '#3A3A3A' : '#aeaeae')};
	font-family: Comfortaa;
	font-size: 1rem;
	font-weight: 700;
	line-height: 18px;
`;

const TopShadeWrapper = styled.div`
	position: absolute;
	right: 0%;
	top: 0%;
`;

const DesktopDisplay = styled.section`
	display: flex;
	width: 114rem;
	max-width: 100%;
	align-items: center;
	justify-content: space-between;
	height: 5rem;
	padding-inline: 2rem;
	transform: ${({ delayFiveSec }) => (delayFiveSec === 'block' ? 'translateY(0%)' : 'translateY(-100%)')};
	transition-duration: 700ms;
	@media only screen and (max-width: 54.31rem) {
		display: none;
	}
`;

const TabletDisplay = styled.section`
	display: flex;
	justify-content: space-between;
	max-width: 100%;
	height: 6rem;
	padding-inline: 2rem;
	align-items: center;

	@media only screen and (min-width: 54.3rem) {
		display: none;
	}
`;

const Hamburger = styled.div`
	display: block;
	z-index: 999;
	& > span {
		margin-inline-start: 2rem;
		margin-top: 0.3rem;
		display: block;
		height: 2px;
		background-color: ${({ theme }) => theme.primary.default};
		-webkit-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out 0.4s;
		border-radius: 10rem;
	}

	&:hover {
		cursor: pointer;
	}

	span:nth-child(1),
	span:nth-child(3) {
		width: ${({ closeMenu }) => (closeMenu ? '25px' : '26px')};
	}
	span:nth-child(2) {
		width: ${({ closeMenu }) => (closeMenu ? '25px' : '0')};
	}
	span:nth-child(1) {
		-webkit-transform: ${({ closeMenu }) => (closeMenu ? '' : 'translateX(-10px, 8px) rotate(-45deg)')};
		-ms-transform: ${({ closeMenu }) => (closeMenu ? '' : 'translateX(-10px, 8px) rotate(-45deg)')};
		-o-transform: ${({ closeMenu }) => (closeMenu ? '' : 'translateX(-10px, 8px) rotate(-45deg)')};
		transform: ${({ closeMenu }) => (closeMenu ? '' : 'translate(-10px, 8px) rotate(-45deg)')};
	}

	span:nth-child(3) {
		-webkit-transform: ${({ closeMenu }) => (closeMenu ? '' : 'translateX(-10px, -8px) rotate(45deg)')};
		-ms-transform: ${({ closeMenu }) => (closeMenu ? '' : 'translateX(-10px, -8px) rotate(45deg)')};
		-o-transform: ${({ closeMenu }) => (closeMenu ? '' : 'translateX(-10px, -8px) rotate(45deg)')};
		transform: ${({ closeMenu }) => (closeMenu ? '' : 'translate(-10px, -6px) rotate(45deg)')};
	}
`;

const MobileSideBar = styled.nav`
	position: fixed;
	inset: 0% 0% 0% 0%;
	display: flex;
	background-color: ${({ theme }) => theme.bg};
	backdrop-filter: blur(1rem);
	flex-direction: column;
	transform: ${({ closeMenu }) => (closeMenu ? 'translate(100%)' : 'translate(0%)')};
	transition-duration: 700ms;
	z-index: 99;
	height: 100vh;
`;

const NavWrapper = styled.div`
	margin-top: 10rem;
	padding-inline: 2rem;
`;

const NavItem = styled.a`
	display: block;
	font-size: 2rem;
	font-weight: 700;
	line-height: 2rem;
	color: ${({ activeTab, name, theme }) => (name === activeTab ? `${theme.primary.default}` : '#3A3A3A')};
	padding-block: 1rem;
	text-decoration: none;
`;

const TopGradient = styled.div`
	position: absolute;
	top: 0%;
	left: 0%;
`;
const BottomGradient = styled.div`
	position: absolute;
	bottom: 0%;
	right: 0%;
`;

const SocailMedia = styled.div`
	position: absolute;
	bottom: 5%;
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
