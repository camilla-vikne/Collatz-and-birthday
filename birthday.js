const probability = {
  exponentiation: function (d, n) {
    const a = (n * (n - 1)) / 2,
      b = (d - 1) / d;
    return ((1 - Math.pow(b, a)) * 100).toFixed(2);
  },
};

const button = document.getElementById("submit");

button.addEventListener("click", onClick);

function onClick(event) {
  const days = 365,
    people = document.getElementById("people").value;

  document.getElementById("results").innerHTML =
    "The probability of some pair having the same birthday in a set of " +
    people +
    " people is " +
    probability.exponentiation(days, people) +
    "%.";
}
