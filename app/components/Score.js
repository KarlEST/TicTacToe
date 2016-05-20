import React, { Component, PropTypes } from 'react';

export default class Score extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	render() {
		return (
			<div className="score">
				<p>{this.props.name}</p>
			</div>
		);
	}
}