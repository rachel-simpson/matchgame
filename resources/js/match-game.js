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


MatchGame.renderCards = function(cardValues, $game) {

  $game.data("isFlipped", []);

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
    let $newCard = $('<div class="col-3 card"></div>');

    $newCard.data("value", cardValues[i]);
    $newCard.data("flipped", false);
    $newCard.data("color", (colors[$newCard.data("value") - 1]));
    $game.append($newCard);
  };

  $('.card').click(function () {
    MatchGame.flipCard($(this), $('#game'));
  });

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

  if ($card.data("flipped") === true) {
    return;
  } else {
    $card.css("background-color", $card.data("color"));
    $card.html("<h1>" + $card.data("value") + "</h1>");
    $card.data("flipped", true);
    $game.data("isFlipped").push($card.data("value"));
    $card.addClass("attempt");
    console.log("Array length: " + $game.data("isFlipped").length);
    if ($game.data("isFlipped").length === 2) {
      console.log("First array value: " + $game.data("isFlipped")[0]);
      console.log("Second array value: " + $game.data("isFlipped")[1]);

      const $cardOne = $game.data("isFlipped")[0];
      const $cardTwo = $game.data("isFlipped")[1];

      if ($cardOne === $cardTwo) {
        $('.attempt').css("background-color", "rgb(153, 153, 153)");
        $('.attempt').children().css("color", "rgb(204, 204, 204)");
        $game.data("isFlipped", []);
      } else {
        setTimeout(function() {
          $('.attempt').css("background-color", "rgb(32, 64, 86)");
          $('.attempt').empty();
          $('.attempt').data("flipped", false);
          $('.attempt').removeClass('attempt');
          $game.data("isFlipped", []);
        }, 500);
      }
    }
  }
};
