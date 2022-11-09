import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'styles/shared';
import Header from 'components/Header';
import { Main, Invest, HowItWork, StrategyTools, LogosSlider } from 'components/pages';

export default function App() {
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
				<Invest />
				<HowItWork />
				<StrategyTools />
			</Container>
		</>
	);
}
