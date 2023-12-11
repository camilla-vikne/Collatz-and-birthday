const probability = {
  exponentiation: function (d, n, Y) {
    let totalProbability = 0;

    for (let i = 0; i < Y; i++) {
      const a = (n * (n - 1)) / 2,
        b = (d - 1) / d;
      const result = (1 - Math.pow(b, a)) * 100;
      totalProbability += result;
    }

    const averageProbability = (totalProbability / Y).toFixed(2);
    return averageProbability;
  },
};

const button = document.getElementById("submit");

button.addEventListener("click", onClick);

function onClick(event) {
  const days = 365,
    people = document.getElementById("people").value;
  runs = document.getElementById("runs").value;

  document.getElementById("results").innerHTML =
    "The probability of some pair having the same birthday in a set of " +
    people +
    " people is " +
    probability.exponentiation(days, people) +
    "%.";
}
