import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router} from 'react-router'
import App from './server/App'

render(
	(
		<Router>
			<App/>
		</Router>
	),
	document.getElementById("app")
)
