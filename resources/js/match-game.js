const MatchGame = {};

$(document).ready(function() {

  const $game = $('#game');
  let numberArray = MatchGame.generateCardValues();
  MatchGame.renderCards(numberArray, $game);

});
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  const numberPairs = [];
  for (var i = 1; i < 9; i++) {
    numberPairs.push(i, i);
  };
  const randomPairs = [];
  while (numberPairs.length > 0) {
    let randomIndex = Math.floor(Math.random() * numberPairs.length);
    randomPairs.push(numberPairs[randomIndex]);
    numberPairs.splice(randomIndex, 1);
  };
  return randomPairs;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

// the cardValues arguement is the function generateCardValues
// the $game arguement is $('#game')
// for each item in the array, create a new p element containing the array item
// if the item is x number, style this way (switch statement)

// Empty the $game objects HTML
// Generate jQuery objects for each card, including data about the value, color, and flipped status of each card
// Add the card objects to the $game object

MatchGame.renderCards = function(cardValues, $game) {

  const colors = [
    "hsl(25, 85%, 65%)",
    "hsl(55, 85%, 65%)",
    "hsl(90, 85%, 65%)",
    "hsl(160, 85%, 65%)",
    "hsl(220, 85%, 65%)",
    "hsl(265, 85%, 65%)",
    "hsl(310, 85%, 65%)",
    "hsl(360, 85%, 65%)", ]

  $game.empty();
  for (var i = 0; i < cardValues.length; i++) {
    let $newCard = $("<div class='card col-3'></div>");
    $newCard.data("number", cardValues[i]);
    $newCard.data("flipped", false);
    $newCard.data("color", ($newCard.data("number") - 1));
    $game.append($newCard);
  };
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
