window.onload = function () {
  //write your code here
  var cards = ["♥", "♦ ", "♣", "♠"];
  var numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  function Generador() {
    var pickCard = Math.floor(Math.random() * cards.length);
    var pickNumber = Math.floor(Math.random() * numbers.length);
  var showCard = `${cards[pickCard]}`;
  var showNumber = `${numbers[pickNumber]}`;

    document.getElementById('top-corner').innerHTML = showCard;
    document.getElementById('card-number').innerHTML = showNumber;
    document.getElementById('bottom-corner').innerHTML = showCard
  }
  console.log(Generador());
}
