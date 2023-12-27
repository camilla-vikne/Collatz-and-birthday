let sucessCount = 0;
let failureCount = 0;
let myChart;
const body = document.body;

const probability = {
  calculation: function (days, number, groups) {
    failureCount = 0;
    sucessCount = 0;
    for (let i = 0; i < groups; i++) {
      let birthdays = new Set();
      let sameBirthday = false;

      for (let j = 0; j < number; j++) {
        const randomBirthday = Math.floor(Math.random() * days) + 1;
        if (birthdays.has(randomBirthday)) {
          sameBirthday = true;
          break;
        }
        birthdays.add(randomBirthday);
      }

      if (sameBirthday) {
        sucessCount++;
      }
      if (sameBirthday === false) {
        failureCount++;
      }
    }
    const successProbability = (sucessCount / groups) * 100;
    return successProbability.toFixed(2);
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

  const result = probability.calculation(days, people, group);

  document.getElementById("results").innerHTML =
    "The average probability of a pair having the same birthday in a set of " +
    people +
    " people over " +
    group +
    " test groups, there were two or more people who shared a birthday in " +
    result +
    "% of the test groups.";
  destroyChart();
  createChart();
  modeChecker();
}

// Chart

function destroyChart() {
  if (myChart != null) {
    myChart.destroy();
  }
}

function createChart() {
  const data = {
    labels: ["Same Birthday", "Different Birthdays"],
    datasets: [
      {
        label: "Value",
        data: [sucessCount, failureCount],
        backgroundColor: ["#a64fd9", "rgba(101, 106, 222, 1)"],
        hoverOffset: 4,
      },
    ],
  };
  myChart = new Chart(document.getElementById("acquisitions"), {
    type: "pie",
    data: data,
    options: {
      backgroundColor: "#a64fd9",
      borderColor: "#1f2028",
      color: "white",
    },
  });
}

function modeChecker() {
  if (body.classList.contains("light-mode")) {
    myChart.options.borderColor = "#FFFFFF";
    myChart.options.color = "black";
    myChart.update();
  }
}

//Lightmode
function toggleStylesheet() {
  const body = document.body;
  const image = document.getElementById("dm-lm-btn");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    image.src = "./images/purple_moon.svg";
    localStorage.setItem("isDarkMode", "false");
    myChart.options.borderColor = "#FFFFFF";
    myChart.options.color = "black";
    myChart.update();
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    image.src = "./images/purple_sun.svg";
    localStorage.setItem("isDarkMode", "true");
    myChart.options.borderColor = "#1f2028";
    myChart.options.color = "#FFFFFF";
    myChart.update();
  }
}

window.onload = function () {
  const isDarkMode = localStorage.getItem("isDarkMode");

  if (isDarkMode === "true") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
};
