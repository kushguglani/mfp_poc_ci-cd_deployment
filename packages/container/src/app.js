import React, { Suspense, lazy, useState, useEffect } from 'react';
// import UseRefExample from './component/useRefExample'; 
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './component/header'
import Progress from "./component/Progress";
import { createBrowserHistory } from 'history';

const MarketingAppLazy = lazy(() => import('./component/MarketingApp'));
const AuthAppLazy = lazy(() => import('./component/AuthApp'));
const DashboardAppLazy = lazy(() => import('./component/DashboardApp'));

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})
const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn])
	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<Header onSignOut={() => { setIsSignedIn(false) }} isSignedIn={isSignedIn} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth" >
							<AuthAppLazy onSignIn={() => { setIsSignedIn(true) }} />
						</Route>
						<Route path="/dashboard">
							{!isSignedIn && <Redirect to="/" />}
							<DashboardAppLazy />
						</Route>
						<Route path="/" component={MarketingAppLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</Router>
	)
}

// if we are writing /auth
// it means any route which have 
// auth/signin or auth/sdfgh
// matches to /auth

// where as if we write /
// any rote like /pricing,/markeying anything expect /auth comes here 