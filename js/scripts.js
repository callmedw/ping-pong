//--------------------------Business Logic--------------------------//

  var disqualifyTest = function(input) {
    return /^[0-9]*$/gi.test(input);
  }

  var countArr = [];
  function pingPong(inputNumber) {
    for (var i = 1; i <= inputNumber; i++) {
      if ((i % 15) === 0) {
        countArr.push(" " + "ping-PONG");
      } else if ((i % 5) === 0) {
        countArr.push(" " + "PONG");
      } else if ((i % 3) === 0) {
        countArr.push(" " + "ping");
      } else {
        countArr.push(" " + i);
      }
    }
  };

//------------------------User Interface Logic------------------------//
$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var inputNumber = parseInt($('input').val());

    if (disqualifyTest(inputNumber) === true) {
        pingPong(inputNumber);
        } else {
        $("#displayResults").empty();
        alert("A number is required, please check that you have entered only a number.");
        }
    $("#displayResults").text(countArr);
  });
});
