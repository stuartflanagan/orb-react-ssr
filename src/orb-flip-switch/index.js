import React from 'react';
import ReactDOM from 'react-dom';
import style from './style';

export default class OrbFlipSwitch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {flipped: false, rippleArea: {}};
		this.flip = this.flip.bind(this);
	}

	componentDidMount(){
		this.onResize();
	}

	flip(event){
		event.preventDefault();
		this.setState({flipped: !this.state.flipped});
	}

	onResize() {
		let boundingBox = ReactDOM.findDOMNode(this).getBoundingClientRect()
		this.setState({rippleArea: this.getRippleArea(boundingBox)});
	}


	getRippleArea (boundingBox = { left:0, right:0, width:0, height:0 }) {
		const midX = boundingBox.left + boundingBox.width * 0.5;
		const midY = boundingBox.top + boundingBox.height * 0.5;

		const rX = Math.max(midX, window.innerWidth - midX);
		const rY = Math.max(midY, window.innerHeight - midY);

		const radius = Math.sqrt(rX * rX + rY * rY);

		return {width: `${radius * 2}px`, height:  `${radius * 2}px`};
	}
	
	render(){
		return (
			<div className={ style.orbFlipSwitch }>
				<div className={ this.state.flipped ? style.flipped : '' }>
					<div className={ style.ripple } onClick={ this.flip } style={ this.state.rippleArea }></div>
					<div className={ style.shadow2px }></div>
					<div className={ style.shadow12px }></div>
					<div className={ style.container }>
						<div className={ style.front } onClick={ this.flip }>
							<img src="https://s3-ap-southeast-2.amazonaws.com/orb.test.react/assets/logo.png" alt="The Orbweavers - Home" />
						</div>
						<div className={ style.back } onClick={ this.flip }>
							<img src="https://s3-ap-southeast-2.amazonaws.com/orb.test.react/assets/hero.png" alt="The Orbweavers - Home" />
						</div>
					</div>
				</div>
			</div>);
	}
}