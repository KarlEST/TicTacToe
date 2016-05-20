import React, { Component, PropTypes } from 'react';
import Square from './Square';

export default class Playfield extends Component {
	static propTypes = {
		squares: PropTypes.array.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	render() {
		return (
			<div className="playfield">
				{this.props.squares.map(this.renderSquare)}
			</div>
		);
	}

	renderSquare = (square) => {
		return (
			<Square
				id={square.squareName}
				key={square.squareName}
				valueOfSquare={square.squareValue}
				onClick={this.props.onClick}
			/>
		);
	}
}
