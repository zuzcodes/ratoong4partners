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
      text: "Gender",
      color: "#ffffff",
    },
  },
};

export const data = {
  labels: ["Male", "Female", "Non-binary"],
  datasets: [
    {
      label: "%",
      data: [53, 46, 1],
      backgroundColor: ["rgba(85, 112, 255, 0.2)", "rgba(207, 218, 255, 0.2)", "rgba(250, 250, 250, 0.2)"],
      borderColor: ["rgba(85, 112, 255, 1)", "rgba(207, 218, 255, 1)", "rgba(250, 250, 250, 1)"],
      borderWidth: 1,
    },
  ],
};

function PieChartGender() {
  return <Pie data={data} options={options} width="350px" />;
}
export default PieChartGender;
