describe('Pokemon', function() {

	beforeEach(function() {
			bulbasaur = new Bulbasaur();
			squirtle = new Squirtle();
			charmander = new Charmander();
			pokemon = new Pokemon();		
	});

	describe('Types of Pokemon', function() {

		it('Bulbasaur', function() {
			expect(bulbasaur.type).toEqual('bulbasaur');
		});

		it('Squirtle', function() {
			expect(squirtle.type).toEqual('squirtle')
		});

		it('Charmander', function() {
			expect(charmander.type).toEqual('charmander')
		});

	});

	describe('Which pokemon beats which', function() {

		it('Bulbasaur beats Squirtle', function() {
			expect(bulbasaur.beats).toEqual('squirtle')
		});

		it('Squirtle beats Charmander', function() {
			expect(squirtle.beats).toEqual('charmander')
		});

		it('Charmander beats Squirtle', function() {
			expect(charmander.beats).toEqual('bulbasaur');
		});

	});

	describe('Outcomes of the game', function() {

		beforeEach(function() {
		});

		it('Player wins', function() {
			choiceOne = new Bulbasaur();
			choiceTwo = new Squirtle();
			expect(pokemon.winner(choiceOne, choiceTwo)).toEqual('You Win!')
		});

		it('Player loses', function() {
			choiceTwo = new Charmander();
			choiceOne = new Bulbasaur();
			expect(pokemon.winner(choiceOne, choiceTwo)).toEqual('You Lose!')
		});

		it('A Draw', function() {
			choiceOne = new Squirtle();
			choiceTwo = new Squirtle();
			expect(pokemon.winner(choiceOne, choiceTwo)).toEqual("It's a Draw!")
		})
	})

});