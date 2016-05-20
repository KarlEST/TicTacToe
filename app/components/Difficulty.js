import React, { Component, PropTypes } from 'react';
export default class Difficulty extends Component {
	static propTypes = {
		against: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		player: PropTypes.string.isRequired,
	};

	render() {
		let name = this.props.against === 'human' ? 'bot' : 'human';

		return (
			<div className="difficulty">
				<button onClick={this.props.onClick}>Play against {name}</button>
				<p>Player {this.props.player} turn</p>
			</div>
		);
	}
}