/*$("button").on("click", function () {
  var x = $(this).html("x");
  $("button").on("click", function () {
  var o = $(this).html("o");
  $("button").on("click", function () {
  var x = $(this).html("x");
  $("button").on("click", function () {
  var o = $(this).html("o");
  $("button").on("click", function () {
  var x = $(this).html("x");
$("button").on("click", function () {
  var o = $(this).html("o");
$("button").on("click", function () {
  var x = $(this).html("x")
$("button").on("click", function () {
  var o = $(this).html("o");
$("button").on("click", function () {
  var x = $(this).html("x");
  })})
})
})
})
})
  
  })
});
});*/
var playerTurn = true;
$("button").on("click", function () {
  if (playerTurn === true) {
    $(this).html("x");
    playerTurn = false;
  } else {
    $(this).html("o");
    playerTurn = !playerTurn;
  }

  if (
    ($("#button1").html() === "x" &&
      $("#button2").html() === "x" &&
      $("#button3").html() === "x") ||
    ($("#button4").html() === "x" &&
      $("#button5").html() === "x" &&
      $("#button6").html() === "x") ||
    ($("#button7").html() === "x" &&
      $("#button8").html() === "x" &&
      $("#button9").html() === "x") ||
    ($("#button1").html() === "x" &&
      $("#button5").html() === "x" &&
      $("#button9").html() === "x") ||
    ($("#button3").html() === "x" &&
      $("#button5").html() === "x" &&
      $("#button7").html() === "x") ||
    ($("#button1").html() === "x" &&
      $("#button4").html() === "x" &&
      $("#button6").html() === "x") ||
    ($("#button2").html() === "x" &&
      $("#button5").html() === "x" &&
      $("#button8").html() === "x") ||
    ($("#button3").html() === "x" &&
      $("#button6").html() === "x" &&
      $("#button9").html() === "x")
  ) {
    $("h1").html("x wins");
  } else if (
    ($("#button1").html() === "o" &&
      $("#button2").html() === "o" &&
      $("#button3").html() === "o") ||
    ($("#button4").html() === "o" &&
      $("#button5").html() === "o" &&
      $("#button6").html() === "o") ||
    ($("#button7").html() === "o" &&
      $("#button8").html() === "o" &&
      $("#button9").html() === "o") ||
    ($("#button1").html() === "o" &&
      $("#button5").html() === "o" &&
      $("#button9").html() === "o") ||
    ($("#button3").html() === "o" &&
      $("#button5").html() === "o" &&
      $("#button7").html() === "o") ||
    ($("#button1").html() === "o" &&
      $("#button4").html() === "o" &&
      $("#button6").html() === "o") ||
    ($("#button2").html() === "o" &&
      $("#button5").html() === "o" &&
      $("#button8").html() === "o") ||
    ($("#button3").html() === "o" &&
      $("#button6").html() === "o" &&
      $("#button9").html() === "o")
  ) {
    $("h1").html("o wins");
  }
});
