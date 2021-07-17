import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
	const dashRef = useRef(null);
	useEffect(() => {
		// as mount function in  marketing bootstrap.js need an elemnt so we created ref of an element and pass in div as ref 
		mount(dashRef.current);
	}, [])
	return <div ref={dashRef} />
}