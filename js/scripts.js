

//--Business Logic--//

  var disqualifyTest = function(input) {
    return /^[0-9]*$/gi.test(input);
  }










//--User Interface Logic--//

$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var inputNumber = parseInt($('input').val());
      $("#displayResults").text(inputNumber);

    if (disqualifyTest(inputNumber) === true) {
        pingPong(inputNumber);
        } else {
        alert("A number is required to count to, please check that you have entered only a number.");
        }
  });
});
