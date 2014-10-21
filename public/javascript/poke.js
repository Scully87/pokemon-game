function Pokemon() {};

function Bulbasaur() {
	this.type = 'bulbasaur'
	this.beats = 'squirtle'
};

function Squirtle() {
	this.type = 'squirtle'
	this.beats = 'charmander'
};

function Charmander() {
	this.type = 'charmander'
	this.beats = 'bulbasaur'
}

Pokemon.prototype.winner = function(choiceOne, choiceTwo) {
	if(choiceOne.beats === choiceTwo.type) return 'You Win!';
	if(choiceTwo.beats === choiceOne.type) return 'You Lose!';
	if(choiceOne.type === choiceTwo.type) return "It's a Draw!";
};