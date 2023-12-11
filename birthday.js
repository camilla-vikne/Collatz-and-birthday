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

// Andreas: average doesn't change depending on what number of runs you make
//not sure if mathematical error or code

//“I en gruppe på X personer, med Y testgrupper, var det
//en eller flere som delte bursdag i Z.ZZ% av testgruppene”

//Y avgjør hvor nøyaktig oddsen er. Prøv X på 23
//og Y på 50000 og se om prosenten lander på rett over 50.
const button = document.getElementById("submit");

button.addEventListener("click", onClick);

function onClick(event) {
  const days = 365,
    people = document.getElementById("people").value;
  group = document.getElementById("group").value;

  const result = probability.exponentiation(days, people, group);

  document.getElementById("results").innerHTML =
    "The average probability of a pair having the same birthday in a set of " +
    people +
    " people over " +
    group +
    "test groups, there were two or more people who shared a birthday in " +
    probability.exponentiation(days, people) +
    "% of the test groups.";
}
