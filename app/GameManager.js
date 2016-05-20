
export default class GameManager {

	constructor() {
		this.squares = this.getInitialSquaresState();
	}

	getInitialSquaresState() {
		return [
			{ squareName: 'top_left', squareValue: '' },
			{ squareName: 'top', squareValue: '' },
			{ squareName: 'top_right', squareValue: '' },
			{ squareName: 'mid_left', squareValue: '' },
			{ squareName: 'mid', squareValue: '' },
			{ squareName: 'mid_right', squareValue: '' },
			{ squareName: 'bot_left', squareValue: '' },
			{ squareName: 'bot', squareValue: '' },
			{ squareName: 'bot_right', squareValue: '' },
		];
	}

	updateState(squareName, value) {
		const newSquare = this.squares.find(square => square.squareName === squareName) || this.squares[0];
		
		newSquare.squareValue = value;
	}

	isFull() {
		return this.squares.every(square => square.squareValue !== '');
	}

	getState() {
		return this.squares;
	}

	botMoveEasy() {
		if (!this.isFull()) {
			let k = 0;
			for (;;) {
				const number = Math.floor(Math.random() * 9);
				if (this.squares[number].squareValue === '') {
					k = number;
					break;
				}
			}
			this.updateState(this.squares[k].squareName, 'O');
		}
	}


	startAgain() {
		this.squares = this.getInitialSquaresState();
	}

	checkWin() {
		const check = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

		return check.findIndex((list) => {
			return (this.squares[list[0]].squareValue === this.squares[list[1]].squareValue &&
				this.squares[list[0]].squareValue === this.squares[list[2]].squareValue &&
				this.squares[list[0]].squareValue !== '');
		});
	}
}