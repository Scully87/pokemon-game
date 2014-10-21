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
	if(choiceOne.type === choiceTwo.type)
		return "Draw";
	else if (choiceOne.beats === choiceTwo.type)
			return choiceOne.type;
	else 
			return choiceTwo.type;
}
		