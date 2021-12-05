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
      text: "Level",
      color: "#ffffff",
    },
  },
};

export const data = {
  labels: ["Ski", "Snowboard", "Both"],
  datasets: [
    {
      label: "%",
      data: [47, 39, 14],
      backgroundColor: ["rgba(207, 218, 255, 0.2)", "rgba(226, 250, 255, 0.2)", "rgba(250, 250, 250, 0.2)"],
      borderColor: ["rgba(207, 218, 255, 1)", "rgba(226, 250, 255, 1)", "rgba(250, 250, 250, 1)"],
      borderWidth: 1,
    },
  ],
};

function PieChartLevel() {
  return <Pie data={data} options={options} width="350px" />;
}
export default PieChartLevel;
