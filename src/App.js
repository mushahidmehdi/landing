import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'styles/shared';
import Header from 'components/Header';
import { Main, Invest, HowItWork, StrategyTools, LogosSlider, MarketPlace } from 'components/pages';
import { Footer } from 'components/Footer';

export default function App() {
	const [userType, setUserType] = useState(0);

	return (
		<>
			<Helmet>
				<title>Trader Land </title>
				<meta
					charSet="utf-8"
					name="description"
					content="Home Page of Trader Land. Traderlands allow to turn their trading strategies into automated bots, backtesting and sharing their strategies on the marketplace."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Helmet>
			<Header />
			<Main />
			<LogosSlider />
			<Container>
				<Invest setUserType={setUserType} userType={userType} />
				<HowItWork />
				<StrategyTools userType={userType} />
				<MarketPlace userType={userType} />
			</Container>
			<Footer userType={userType} />
		</>
	);
}
