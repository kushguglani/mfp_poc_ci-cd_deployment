import React, { Suspense, lazy, useState } from 'react';
// import UseRefExample from './component/useRefExample'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/header'
import Progress from "./component/Progress";
const MarketingAppLazy = lazy(() => import('./component/MarketingApp'));
const AuthAppLazy = lazy(() => import('./component/AuthApp'));

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})


export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false)
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<Header onSignOut={() => { setIsSignedIn(false)}} isSignedIn={isSignedIn}/>
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth" >
							<AuthAppLazy onSignIn={() => { setIsSignedIn(true)}} />
						</Route>
						<Route path="/" component={MarketingAppLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	)
}

// if we are writing /auth
// it means any route which have 
// auth/signin or auth/sdfgh
// matches to /auth

// where as if we write /
// any rote like /pricing,/markeying anything expect /auth comes here 