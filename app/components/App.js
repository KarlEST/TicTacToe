import React, { Component } from 'react';

import Title from './Title';
import TicTacToeField from './TicTacToeField';

export default class App extends Component {
	render() {
		return (
			<div className="wrap">
				<Title data="Tic-Tac-Toe" />
				<TicTacToeField data="TicTacToeField" />
			</div>
		);
	}
}