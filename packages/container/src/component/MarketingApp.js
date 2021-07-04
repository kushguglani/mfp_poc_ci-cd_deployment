import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
	const marketRef = useRef(null);
	useEffect(() => {
		// as mount function in  marketing bootstrap.js need an elemnt so we created ref of an element and pass in div as ref	 
		mount(marketRef.current)
	})
	console.log(marketRef);
	
	return <div ref={marketRef} />
}