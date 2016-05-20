import React, { Component, PropTypes } from 'react';
import Score from './Score';
import PlayField from './Playfield';
import Difficulty from './Difficulty';
import GameManager from '../GameManager';

export default class TicTacToeField extends Component {
	static propTypes = {
		data: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);

		this.gameManager = new GameManager();
		this.state = {
			squares: this.gameManager.getInitialSquaresState(),
			opponent: 'bot',
			turn: '1',
			winner: null,
		};
	}

	render() {
		return (
			<div className="tictactoefield">
				<Score name={this.state.winner} />
				<PlayField squares={this.state.squares} onClick={this.handleClick} />
				<Difficulty
					onClick={this.handleDifficulty}
					player={this.state.turn}
					against={this.state.opponent}
				/>
			</div>
		);
	}

	handleClick = (data, value) => {
		if (this.gameManager.isFull() || this.gameManager.checkWin() !== -1) {
			this.gameManager.startAgain();
			this.setState({
				squares: this.gameManager.getState(),
				winner: null,
			});
		} else {
			if (value === '') {
				if (this.state.turn === '1') {
					this.gameManager.updateState(data, 'X');
				} else {
					this.gameManager.updateState(data, 'O');
				}

				this.setState({ squares: this.gameManager.getState() });
				let winPosition = this.gameManager.checkWin();

				if (winPosition !== -1) {
					if (this.state.turn === '1') {
						this.setState({ winner: 'Player 1 won!' });
					} else {
						this.setState({ winner: 'Player 2 won!' });
					}
				} else if (this.gameManager.isFull()) {
					this.setState({ winner: "It's a draw" });
				} else {
					if (this.state.opponent === 'bot') {
						this.gameManager.botMoveEasy();
						this.setState({ squares: this.gameManager.getState() });
						winPosition = this.gameManager.checkWin();
						if (winPosition !== -1) {
							this.setState({ winner: 'Easy bot won!' });
						}
					}
				}
				if (this.state.opponent === 'human' && this.state.turn === '1') {
					this.setState({ turn: '2' });
				} else if (this.state.opponent === 'human' && this.state.turn === '2') {
					this.setState({ turn: '1' });
				}
			}
		}
	};

	handleDifficulty = () => {
		this.gameManager.startAgain();
		if (this.state.opponent === 'bot') {
			this.setState({ opponent: 'human', squares: this.gameManager.getState(), turn: '1', winner: '' });
		} else {
			this.setState({ opponent: 'bot', squares: this.gameManager.getState(), turn: '1', winner: '' });
		}
	};
}