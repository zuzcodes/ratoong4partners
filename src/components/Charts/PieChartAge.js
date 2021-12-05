import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Age",
      color: "#ffffff",
    },
  },
};

export const data = {
  labels: ["0 - 20", "20 - 40 ", "40 - 60", "60+"],
  datasets: [
    {
      label: "%",
      data: [24, 42, 21, 13],
      backgroundColor: ["rgba(85, 112, 255, 0.2)", "rgba(207, 218, 255, 0.2)", "rgba(226, 250, 255, 0.2)", "rgba(250, 250, 250, 0.2)"],
      borderColor: ["rgba(85, 112, 255, 1)", "rgba(207, 218, 255, 1)", "rgba(226, 250, 255, 1)", "rgba(250, 250, 250, 1)"],
      borderWidth: 1,
    },
  ],
};

function PieChartAge() {
  return <Pie data={data} options={options} width="350px" />;
}
export default PieChartAge;
