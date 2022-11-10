import React, { useState } from 'react';
import styled from 'styled-components';
import { tradingNavigation } from 'configs/tradingNavigation';
import ChartImage from 'assests/images/anima-img.png';
import ToggleUser from './ToggleUserButon';
import { Heading, SubHeading } from 'styles/shared';

const Invest = ({ setUserType }) => {
	const [activeTab, setActiveTab] = useState();

	return (
		<InvestWrapper>
			<Head>
				<ToggleUser setUserType={setUserType} />
				<Heading>Invest in everything.</Heading>
				<SubHeading>Gain access and exposure to a growing list of asset classes, not just stocks.</SubHeading>
				<Navigations>
					{tradingNavigation.map(({ name, link }, idx) => (
						<NavItem key={idx} name={name} activeTab={activeTab} onClick={() => setActiveTab(name)}>
							{name}
						</NavItem>
					))}
				</Navigations>
			</Head>
			<Body>
				<LeftBody>
					<img src={ChartImage} alt="Chart" width={800} />
				</LeftBody>
				<RightBody>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown.
					</p>
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
	margin-block: 1rem;
`;

const NavItem = styled.a`
	text-decoration: none;
	color: ${({ theme, activeTab, name }) => (activeTab === name ? `${theme.primary.default}` : `${theme.gray[200]}`)};
	font-size: 1.6rem;
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
