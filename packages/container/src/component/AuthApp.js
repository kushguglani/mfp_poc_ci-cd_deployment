import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from "react-router-dom";

export default ({ onSignIn}) => {
	const authRef = useRef(null);
	const history = useHistory()
	useEffect(() => {
		// as mount function in  marketing bootstrap.js need an elemnt so we created ref of an element and pass in div as ref 
		const { onParentNavigate } = mount(authRef.current, {
			initialPath:history.location.pathname,
			onNavigate: (location) => {
				const { pathname: nextPathName } = location;
				const { location: { pathname: currentPathName } } = history;
				if (nextPathName !== currentPathName) {
					history.push(nextPathName);
				}
			},
			onSignIn
		})
		history.listen(onParentNavigate);
	}, [])
	return <div ref={authRef} />
}