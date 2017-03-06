import React from 'react';

import style from './style.css';

export default class OrbFlipSwitch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {flipped: false};
		this.flip = this.flip.bind(this);
	}
	
	flip(event){
		event.preventDefault();
		this.setState({flipped: !this.state.flipped});
	}

	render(){
		return (
		<div className={ this.state.flipped ? style.flipped : '' }>
			<div className={ style.ripple }></div>
			<div className={ style.shadow2px }></div>
			<div className={ style.shadow12px }></div>

			<div className={ style.container }>
				<div className={ style.front } onClick={ this.flip }>
					<img src="images/home-1600.png" alt="The Orbweavers - Home" />
				</div>
				<div className={ style.back }>
					<img src="http://www.theorbweavers.com/images/TheOrbweavers-CR.png" alt="The Orbweavers - Home" />
				</div>
			</div>
		</div>);
	}
}