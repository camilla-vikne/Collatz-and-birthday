function collatz() {
  let inputNumber = document.getElementById("inputValue").value;

  collatzFunction(inputNumber);
}

function collatzFunction(n) {
  n = parseInt(n, 10);
  const initalValue = n;
  let count = 0;
  let maxNumber = n;
  if (Number.isInteger(n) && n > 0) {
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      count++;
      console.log(n);
      maxNumber = Math.max(maxNumber, n);
    }
    document.getElementById(
      "output"
    ).innerHTML = `${initalValue} used ${count} steps to reach 1, and the highest value reached was ${maxNumber}`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `please enter a valid integer number`;
  }
}
