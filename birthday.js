const probability = {
  exponentiation: function (d, n) {
    const a = (n * (n - 1)) / 2,
      b = (d - 1) / d;
    return ((1 - Math.pow(b, a)) * 100).toFixed(2);
  },
};

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

  document.getElementById("results").innerHTML =
    "In a group of" +
    people +
    " with " +
    group +
    "test groups, there were two or more people who shared a birthday in " +
    probability.exponentiation(days, people) +
    "% of the test groups.";
}
