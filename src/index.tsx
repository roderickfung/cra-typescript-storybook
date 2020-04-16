import React from "react";
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from 'react-hot-loader';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import AppReducers from 'reducers';
import THEME from 'styles/theme';

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
	AppReducers,
	composeWithDevTools(applyMiddleware(thunk))
);

const renderApp = (Component: JSX.Element) => {
	render(
		<AppContainer>
			<React.StrictMode>
				{Component}
			</React.StrictMode>
		</AppContainer>,
		document.getElementById("root")
	);
};

renderApp(
	<ThemeProvider theme={THEME}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
