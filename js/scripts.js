function mrRoboto(number) {
  let inputArray = [];
  for (let i = 0; i <= number; i ++) {
    const endResult = i.toString();
    if (endResult.includes(1)) {
      inputArray.push("Beep!")
  } else {
    inputArray.push(endResult)
  }
  }
  return inputArray;
}