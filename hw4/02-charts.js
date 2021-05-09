let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(230, 150, 60, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(230, 150, 60, 1)',
];


// URL to Game of Thrones API to fetch all characters
let result = {};

async function fetchCharacters() {
  const response = await fetch("https://thronesapi.com/api/v2/Characters");
  const characters = await response.json();
  return characters;
}

fetchCharacters().then((data) => {
  data.forEach((character) => {
    let family = character["family"];
    if (family in result) {
      result[family] = result[family] + 1;
    } else {
      result[family] = 1;
    }
  });
  graph();
});

fetchCharacters();

function graph() {
  console.log(result);
  var key = [];
  var value = [];

  for (element in result) {
    // var key = [];
    // var value = [];
    if (result[element] > 1) {
      key.push(element);
      value.push(result[element]);
    }
  }

  var chart = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(chart, {
    type: "doughnut",
    data: {
      labels: key,
      datasets: [
        {
          label: "",
          data: value,
          backgroundColor: [
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(199, 199, 199, 0.8)',
            'rgba(83, 102, 255, 0.8)',
            'rgba(40, 159, 64, 0.8)',
            'rgba(210, 199, 1, 0.8)',
            'rgba(230, 150, 199, 0.8)',
          
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(159, 159, 159, 1)',
            'rgba(83, 102, 255, 1)',
            'rgba(40, 159, 64, 1)',
            'rgba(210, 199, 1, 1)',
            'rgba(230, 150, 199, 1)',
      
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  });
}
