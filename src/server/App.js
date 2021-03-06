import React from 'react';

import {
	Route,
	Link,
	Switch
} from 'react-router-dom';

export default ({ pathname }) => (
	<AppLayout />
);

const AppLayout = () => (
	<div>
		<ul>
			<li><Link to="/latest/">Home</Link></li>
			<li><Link to="/latest/about">About</Link></li>
			<li><Link to="/latest/topics">Topics</Link></li>
		</ul>
		<hr/>
		
		<Switch>
			<Route exact path="/latest/" component={Home}/>
			<Route path="/latest/about" component={About}/>
			<Route path="/latest/topics" component={Topics}/>
			<Route component={NoMatch}/>
		</Switch>
	</div>
);

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li><Link to={`${match.url}/topic-01`}>Topic 01</Link></li>
			<li><Link to={`${match.url}/topic-02`}>Topic 02</Link></li>
			<li><Link to={`${match.url}/topic-03`}>Topic 03</Link></li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic}/>
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)}/>
	</div>
);

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
);

const NoMatch = ({ location }) => (
	<div>Nothing matched {location.pathname}.</div>
);