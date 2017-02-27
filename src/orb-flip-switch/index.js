import React from 'react';

const style = require('./style.css');

export default class OrbFlipSwitch extends React.Component {
	
	flip(event){
		event.preventDefault();
		this.props.flipped = !!this.props.flipped;
	}

	render(){
		return (
		<div className={ this.props.flipped ? 'flipped' : '' }>
			<div className={ style.ripple }></div>
			<div className={ style.shadow2px }></div>
			<div className={ style.shadow12px }></div>

			<div className={ style.container }>
				<div className={ style.front } onClick={ this.flip }>
					<img src="assets/home-1600.png" alt="The Orbweavers - Home" />
				</div>
				<div className={ style.back }>
					<img src="http://www.theorbweavers.com/images/TheOrbweavers-CR.png" alt="The Orbweavers - Home" />
				</div>
			</div>
		</div>);
	}
}