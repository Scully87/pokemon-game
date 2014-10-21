var game = new Pokemon;
	var gest = {bulbasaur: new Bulbasaur, squirtle: new Squirtle, charmander: new Charmander}
	var computerGesture = null; 
	var computerChoice = function() {
	var gestures = [new Bulbasaur, new Squirtle, new Charmander];
		computerGesture = gestures[Math.floor(Math.random()* gestures.length)];
		return computerGesture
	}

	$(document).ready(function(){

		var andTheWinnerIs = function(winner) {
			if(winner === 'Draw')
        $('#header').text("Draw!, " + playerGesture.type + "'s"); 
      if(winner === playerGesture.type)
        $('#header').text(winner + "! " +"Wins!");
      if(winner === computerGesture.type)
        $('#header').text(playerGesture.type + "! " + "Lost!");
		}
		var playerGesture = null
		var playersChoice = function (choice) {
				playerGesture = gest[$(choice).data('gesture')];
		return playerGesture
}

		$("img").on("click", function(){ 
			andTheWinnerIs(game.decideWinnerOf(playersChoice(this), computerChoice()))
		})

		$('img').on("click", function(){	
			$(".player_choice").text("You chose " + playerGesture.type + "!")
		});

		$('img').on("click", function(){
			$(".opp_choice").text("Your opponent chose " + computerGesture.type + "!")
		});

	});
