import React from 'react';
import ReactDom from 'react-dom';
import App from "./app";

console.log(process.env.NODE_ENV);

const mount = (el) => {
	ReactDom.render(<App />, el)
}

if (process.env.NODE_ENV === "development") {
	const el = document.getElementById('_marketing-root');
	if (el) mount(el);
}

export { mount };