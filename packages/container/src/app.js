import React from 'react';
// import UseRefExample from './component/useRefExample'; 
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from "./component/MarketingApp";
import Header from './component/header'
console.log("--------Container--------");


export default () => (
	<BrowserRouter>
		<Header />
		<MarketingApp />
	</BrowserRouter>
)