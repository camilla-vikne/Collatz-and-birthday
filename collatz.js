function collatz() {
  let inputNumber = document.getElementById("inputValue").value;

  if (isNaN(inputNumber)) {
    alert("Please enter a valid number.");
    return;
  }

  collatzFunction(inputNumber);
}

function collatzFunction(n) {
  n = parseInt(n, 10);
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
    console.log(`Number of iterations: ${count}`);
    console.log(`Highest number reached: ${maxNumber}`);
  } else {
    console.log("please enter a valid integer number");
  }
}
