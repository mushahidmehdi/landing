import React, { useState } from 'react';
import styled from 'styled-components';
import { strategyNavigation, algoNavigation } from 'configs/tradingNavigation';
import ChartImage from 'assests/images/anima-img.png';
import algoTab from 'assests/images/alo-tab.svg';
import ToggleUser from './ToggleUserButon';
import { Heading } from 'styles/shared';

const Invest = ({ setUserType, userType }) => {
	const [activeTab, setActiveTab] = useState();

	return (
		<InvestWrapper>
			<Head>
				<ToggleUser setUserType={setUserType} />
				{userType === 1 ? (
					<Heading> Strategy Creators </Heading>
				) : (
					<Heading>Algorithmic Trading Made Simple</Heading>
				)}

				{/* <SubHeading>Gain access and exposure to a growing list of asset classes, not just stocks.</SubHeading> */}
				<Navigations>
					{userType === 1
						? algoNavigation.map(({ name, link }, idx) => (
								<NavItem key={idx} name={name} activeTab={activeTab} onClick={() => setActiveTab(name)}>
									{name}
								</NavItem>
						  ))
						: strategyNavigation.map(({ name, link }, idx) => (
								<NavItem key={idx} name={name} activeTab={activeTab} onClick={() => setActiveTab(name)}>
									{name}
								</NavItem>
						  ))}
				</Navigations>
			</Head>
			<Body>
				<LeftBody>
					<img src={userType === 1 ? ChartImage : algoTab} alt="Chart" width={800} />
				</LeftBody>
				<RightBody>
					{userType === 1 ? (
						<>
							<p>
								No-Code Strategy Creator Tool lets traders make their own trading bot with ease—no
								programming knowledge is required!
							</p>
							<p>
								Turn any strategy that is built based on technical indicators into a no-code trading bot
								with complete automation capabilities.
							</p>
							<p>You don't have to be a programmer to get started!</p>
						</>
					) : (
						<>
							<p>
								An easy-to-use trading bot platform to start and discover algorithmic trading by
								allowing users to Sign-up, Connect their exchange accounts via API, and get started in
								minutes.
							</p>
							<p>
								Users can manage and monitor their portfolios in multiple crypto exchanges on a single
								platform.
							</p>
						</>
					)}

					<button>Get Start</button>
				</RightBody>
			</Body>
		</InvestWrapper>
	);
};

export default Invest;

const InvestWrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: 54.3rem) {
		/* display: none; */
	}
`;

const Head = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Navigations = styled.nav`
	display: flex;
	justify-content: center;
	gap: 4rem;
	margin-block-start: 1rem;
`;

const NavItem = styled.a`
	text-decoration: none;
	color: ${({ theme, activeTab, name }) => (activeTab === name ? `${theme.primary.default}` : `${theme.gray[200]}`)};
	font-size: 1.4rem;
	font-weight: 600;
	line-height: 31px;
	cursor: pointer;
`;

const Body = styled.div`
	display: flex;
	gap: 4rem;
`;

const LeftBody = styled.div``;

const RightBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 12rem;
	> p {
		color: ${({ theme }) => theme.gray[100]};
		font-size: 1.1rem;
		font-family: Comfortaa;
		font-weight: 500;
		line-height: 22px;
	}
	> button {
		padding: 0.7rem 2rem;
		width: 13rem;
		border: none;
		background-color: ${({ theme }) => theme.primary.default};
		color: ${({ theme }) => theme.gray.fff};
		font-family: Comfortaa;
		font-size: 18px;
		font-weight: 700;
		line-height: 20px;
		border-radius: 0.5rem;
	}
`;
