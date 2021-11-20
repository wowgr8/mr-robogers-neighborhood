//Business Logic

function mrRoboto(number) {
  let inputArray = [];
  for (let i = 0; i <= number; i ++) {
    const endResult = i.toString();
    if (endResult.includes(3)) {
      inputArray.push("Won't you be my neighbor")
    } else if (endResult.includes(2)) {
    inputArray.push("Boop!")
    } else if (endResult.includes(1)) {
      inputArray.push("Beep!")
    } else {
    inputArray.push(endResult)
    }
  }
  return inputArray;
}





// UI Logic

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let info = $("#numberEntry").val();
    const newCourse = mrRoboto(info)
    $("#beepBoopResult").text(newCourse)
    $("#beepBoopOutput").show();
  });
});