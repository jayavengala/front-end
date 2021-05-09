import React, { Component } from "react";
const Chart = window.Chart;

export class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: [],
      value: [],
    };
  }

  async fetchCharacters() {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await response.json();
    return characters;
  }

  componentDidMount() {
    let result = {};
    this.fetchCharacters().then((data) => {
      data.forEach((character) => {
        let family = character["family"];
        if (family in result) {
          result[family] = result[family] + 1;
        } else {
          result[family] = 1;
        }
      });
      this.graph(result);
    });
  }

  graph(result) {
    var keys = [];
    var values = [];

    for (let element in result) {
      if (result[element] > 1) {
        keys.push(element);
        values.push(result[element]);
      }
    }
    this.setState({
      key: keys,
      value: values,
    });
    var chart = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(chart, {
      type: "doughnut",
      data: {
        labels: this.state.key,
        datasets: [
          {
            label: "",
            data: this.state.value,
            backgroundColor: [
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(255, 99, 132, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(199, 199, 199, 0.8)",
              "rgba(83, 102, 255, 0.8)",
              "rgba(40, 159, 64, 0.8)",
              "rgba(210, 199, 1, 0.8)",
              "rgba(230, 150, 199, 0.8)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(159, 159, 159, 1)",
              "rgba(83, 102, 255, 1)",
              "rgba(40, 159, 64, 1)",
              "rgba(210, 199, 1, 1)",
              "rgba(230, 150, 199, 1)",
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

  render() {
    return (
      <div>
        <body className="bg-info">
          <main className="container border rounded bg-light w-75 mt-5">
          <h1 class="h1 my-4">Houses</h1>
            <canvas id="myChart" aria-label="donut chart" role="img"></canvas>
          </main>
        </body>
      </div>
    );
  }
}

export default Temp;
