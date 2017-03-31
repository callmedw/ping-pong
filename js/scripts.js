

//--Business Logic--//

  var disqualifyTest = function(input) {
    return /^[0-9]*$/gi.test(input);
  }


  function pingPong(inputNumber) {
    alert(inputNumber)
    var countArr = [];
    for (var i = 1; i <= inputNumber; i++) {
      countArr.push(i);
      alert(countArr);
    }
    }
    








//--User Interface Logic--//

$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var inputNumber = parseInt($('input').val());

    if (disqualifyTest(inputNumber) === true) {
        pingPong(inputNumber);
        } else {
        $("#displayResults").text("");
        alert("A number is required, please check that you have entered only a number.");
        }
  });
});
