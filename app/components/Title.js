import React, { Component, PropTypes } from 'react';

export default class Title extends Component {
	static propTypes = {
		data: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div className="title">
				<h1>{this.props.data}</h1>
			</div>
		);
	}
}