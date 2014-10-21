var pokemon = new Pokemon();

$(document).ready(function (){
	$('#weapons img').on('click', function(){
		playerWeapon = $(this).data('weapon');
		playerChoice = choices[playerWeapon]
		computerChoice = randomChoice(options);
		$('#header').html(pokemon.winner(playerChoice, computerChoice));
	});
});

var options = [new Bulbasaur, new Squirtle, new Charmander]

var choices = {
	bulbasaur: new Bulbasaur(),
	squirtle: new Squirtle(),
	charmander: new Charmander()
}

var randomChoice = function(options) {
	return options[Math.floor(Math.random()*3)]
}