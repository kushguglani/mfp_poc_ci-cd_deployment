import React from 'react';
import ReactDom from 'react-dom';
import App from "./app";
import { createMemoryHistory, createBrowserHistory } from "history";


console.log(process.env.NODE_ENV);

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
	const memoryHistory = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	});
	onNavigate && memoryHistory.listen(onNavigate);
	ReactDom.render(<App memoryHistory={memoryHistory} onSignIn={onSignIn} />, el)

	return {
		onParentNavigate(location) {
			const { pathname: nextPathName } = location;
			const { location: { pathname: currentpathname } } = memoryHistory;
			if (nextPathName !== currentpathname) {
				memoryHistory.push(nextPathName)
			}
		}
	}
};
if (process.env.NODE_ENV === "development") {
	const el = document.getElementById('_auth-dev-root');
	if (el) mount(el, { defaultHistory: createBrowserHistory() });
}

export { mount };