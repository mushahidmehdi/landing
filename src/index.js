import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/Theme';
import GlobalStyle from 'styles/Global';
import AppErrorBoundary from 'utility/ErrorBoundary';
import 'styles/global.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['en', 'tr'],
		lng: document.querySelector('html').lang,
		fallbackLng: 'en',
		detection: {
			order: [
				'cookie',
				'htmlTag',
				'querystring',
				'localStorage',
				'sessionStorage',
				'navigator',
				'path',
				'subdomain',
			],
			caches: ['cookie'],
		},
		backend: {
			loadPath: '/langs/locales/{{lng}}/translation.json',
		},
		react: {
			useSuspense: false,
		},
	});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppErrorBoundary>
				<App />
			</AppErrorBoundary>
		</ThemeProvider>
	</React.StrictMode>
);
