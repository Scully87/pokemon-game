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

Pokemon.prototype.decideWinnerOf = function(gestureOne, gestureTwo) {
	if(gestureOne.type === gestureTwo.type)
		return "Draw";
	else if (gestureOne.beats === gestureTwo.type)
			return gestureOne.type;
	else 
			return gestureTwo.type;
		
};
		