import React from 'react';

import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from './App';

export default function render(path) {

	// This context object contains the results of the render
	const context = {}

	let body = ReactDOMServer.renderToString(
		<StaticRouter
			location={path}
			context={context}>
			<App/>
		</StaticRouter>
	)

	// context.url will contain the URL to redirect to if a <Redirect> was used
	if (context.url) {
		return {
			statusCode: 301,
			headers: {
				Location: context.url
			}
		};
	} else {
		let statusCode = 200;
		console.log("Context: ", context);
		/*if (context.missed) {
			statusCode = 404;
			body = ReactDOMServer.renderToString(
				<ServerRouter
					location={path}
					context={context}>
					<App/>
				</ServerRouter>
			);
		}*/
		
		return {
			statusCode,
			body
		};
	}
}
