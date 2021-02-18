let board = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
let Head = document.querySelector('.header');
let para1 = document.querySelector('.p1');
let para2 = document.querySelector('.p2');
let P1C = 1;
let P2C = 1;
let Audio1 = document.getElementById('myAudio1');
let Audio2 = document.getElementById('myAudio2');
let Audio3 = document.getElementById('myAudio3');

function playAudio1() {
	Audio1.play();
}

function playAudio2() {
	Audio2.play();
}

function playAudio3() {
	Audio3.play();
}


function Player() {
	this.Turn = false;
	this.Won = false;
}

class Space {
	constructor(id) {
		this.played = false;
		this.id = id;
	}

	XMARK(space) {
		space.insertAdjacentHTML('beforeend', "<div class='x'>X</div>");
	}

	OMARK(space) {
		space.insertAdjacentHTML('beforeend', "<div class='o'>O</div>");
	}
}

const P1 = new Player();
const P2 = new Player();

const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');

function switchTurns(one, two) {
	one.Turn = true;
	two.Turn = false;
}
P1.Turn = true;

document.querySelector('.grid').addEventListener('click', (e) => {
	if (P1.Won !== true && P2.Won !== true) {
		if (e.target.id === space1.id && space1.played === false) {
			if (P1.Turn) {
				playAudio1();
				space1.XMARK(e.target);
				board[0][0] = 'x';
				switchTurns(P2, P1);
				space1.played = true;
			} else {
				playAudio2();
				space1.OMARK(e.target);
				board[0][0] = 'o';
				switchTurns(P1, P2);
				space1.played = true;
			}
		} else if (e.target.id === space2.id && space2.played === false) {
			if (P1.Turn) {
				playAudio1();
				space2.XMARK(e.target);
				board[0][1] = 'x';
				switchTurns(P2, P1);
				space2.played = true;
			} else {
				playAudio2();
				space2.OMARK(e.target);
				board[0][1] = 'o';
				switchTurns(P1, P2);
				space2.played = true;
			}
		} else if (e.target.id === space3.id && space3.played === false) {
			if (P1.Turn) {
				playAudio1();
				space3.XMARK(e.target);
				board[0][2] = 'x';
				switchTurns(P2, P1);
				space3.played = true;
			} else {
				playAudio2();
				space3.OMARK(e.target);
				board[0][2] = 'o';
				switchTurns(P1, P2);
				space3.played = true;
			}
		} else if (e.target.id === space4.id && space4.played === false) {
			if (P1.Turn) {
				playAudio1();
				space4.XMARK(e.target);
				board[1][0] = 'x';
				switchTurns(P2, P1);
				space4.played = true;
			} else {
				playAudio2();
				space4.OMARK(e.target);
				board[1][0] = 'o';
				switchTurns(P1, P2);
				space4.played = true;
			}
		} else if (e.target.id === space5.id && space5.played === false) {
			if (P1.Turn) {
				playAudio1();
				space5.XMARK(e.target);
				board[1][1] = 'x';
				switchTurns(P2, P1);
				space5.played = true;
			} else {
				playAudio2();
				space5.OMARK(e.target);
				board[1][1] = 'o';
				switchTurns(P1, P2);
				space5.played = true;
			}
		} else if (e.target.id === space6.id && space6.played === false) {
			if (P1.Turn) {
				playAudio1();
				space6.XMARK(e.target);
				board[1][2] = 'x';
				switchTurns(P2, P1);
				space6.played = true;
			} else {
				playAudio2();
				space6.OMARK(e.target);
				board[1][2] = 'o';
				switchTurns(P1, P2);
				space6.played = true;
			}
		} else if (e.target.id === space7.id && space7.played === false) {
			if (P1.Turn) {
				playAudio1();
				space7.XMARK(e.target);
				board[2][0] = 'x';
				switchTurns(P2, P1);
				space7.played = true;
			} else {
				playAudio2();
				space7.OMARK(e.target);
				board[2][0] = 'o';
				switchTurns(P1, P2);
				space7.played = true;
			}
		} else if (e.target.id === space8.id && space8.played === false) {
			if (P1.Turn) {
				playAudio1();
				space8.XMARK(e.target);
				board[2][1] = 'x';
				switchTurns(P2, P1);
				space8.played = true;
			} else {
				playAudio2();
				space8.OMARK(e.target);
				board[2][1] = 'o';
				switchTurns(P1, P2);
				space8.played = true;
			}
		} else if (e.target.id === space9.id && space9.played === false) {
			if (P1.Turn) {
				playAudio1();
				space9.XMARK(e.target);
				let index = board[2].indexOf(9);
				board[2][2] = 'x';
				switchTurns(P2, P1);
				space9.played = true;
			} else {
				playAudio2();
				space9.OMARK(e.target);
				let index = board[2].indexOf(9);
				board[2][2] = 'o';
				switchTurns(P1, P2);
				space9.played = true;
			}
		}

		if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		} else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
			playAudio3();
			Head.textContent = 'Player One Wons!';
			Head.style.color = 'tomato';
			para1.textContent = 'Player 1: ' + P1C;
			P1C += 1;
			P1.Won = true;
		}

		if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		} else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
			playAudio3();
			Head.textContent = 'Player Two Wons!';
			Head.style.color = '#33DBFF';
			para2.textContent = 'Player 2: ' + P2C;
			P2C += 1;
			P2.Won = true;
		}
	}
});
let g = document.querySelectorAll('.space');
document.querySelector('.reset').addEventListener('click', () => {
	P1.Turn = true;
	P2.Turn = false;
	P1.Won = false;
	P2.Won = false;
	for (var i = 0; i < 9; i++) {
		g[i].textContent = '';
	}

	Head.textContent = 'Tic Tac Toe';
	board = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
	space1.played = false;
	space2.played = false;
	space3.played = false;
	space4.played = false;
	space5.played = false;
	space6.played = false;
	space7.played = false;
	space8.played = false;
	space9.played = false;
});