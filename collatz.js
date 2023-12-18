collatz = () => {
  let inputNumber = document.getElementById("inputValue").value;

  collatzFunction(inputNumber);
};

let countArray = [];
const body = document.body;
let myChart;

function collatzFunction(n) {
  countArray = [];
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
      maxNumber = Math.max(maxNumber, n);
      countArray.push({ count: count, value: n });
    }
    document.getElementById(
      "output"
    ).innerHTML = `${initalValue} used ${count} steps to reach 1, and the highest value reached was ${maxNumber}`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `please enter a valid integer number`;
  }
  destroyChart();
  createChart();
  modeChecker();
}

function destroyChart() {
  if (myChart != null) {
    myChart.destroy();
  }
}

function createChart() {
  const data = countArray;

  myChart = new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((row) => row.count),
      datasets: [
        {
          label: "Value",
          data: data.map((row) => row.value),
        },
      ],
    },
    options: {
      backgroundColor: "#a64fd9",
      borderColor: "#a64fd9",
      color: "white",
      scales: {
        y: {
          ticks: { color: "white" },
          grid: { color: "#1A1A1A" },
        },
        x: {
          ticks: { color: "white" },
          grid: { color: "#1A1A1A" },
        },
      },
    },
  });
}

function modeChecker() {
  if (body.classList.contains("light-mode")) {
    myChart.options.scales.y.ticks.color = "black";
    myChart.options.scales.x.ticks.color = "black";
    myChart.update();
  }
}

//Lightmode
function toggleStylesheet() {
  const image = document.getElementById("dm-lm-btn");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    myChart.options.scales.y.ticks.color = "black";
    myChart.options.scales.x.ticks.color = "black";
    myChart.update();
    image.src = "./images/purple_moon.svg";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    myChart.options.scales.y.ticks.color = "white";
    myChart.options.scales.x.ticks.color = "white";
    myChart.update();
    image.src = "./images/purple_sun.svg";
  }
}
