import React from 'react';
// import UseRefExample from './component/useRefExample'; 
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from "./component/MarketingApp";
import Header from './component/header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})


export default () => (
	<BrowserRouter>
		<StylesProvider generateClassName={generateClassName}>
			<Header />
			<MarketingApp />
		</StylesProvider>
	</BrowserRouter>
)