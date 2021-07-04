import React, { useRef } from "react";

export default ()=>{
	// const count = useRef({value:0});
	const count = useRef(0);
	const increment =()=>{
		count.current++;
		console.log(`clicke count = ${count.current}`);
		
	}
	console.log('I rendered');
	
	return <button onClick={increment} >{count.current}</button>
}