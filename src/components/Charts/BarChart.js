import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const options = {
  indexAxis: "y",
  responsive: true,
};

export const data = {
  labels: ["RECOMMENDATION", "SLOPE PREPARATION", "LIFTS", "CHILDREN AREA", "SNOWPARK", "APRE SKI", "GASTRONOMY", "HOUSING", "TRANSPORT", "SUSTAINABILITY"],
  datasets: [
    {
      label: "Overall Score",
      data: [4.5, 3, 4, 4.5, 5, 5, 4, 5, 4, 5],
      borderColor: "#cfdaff",
      backgroundColor: "#cfdaff",
      borderWidth: 1,
      borderRadius: 50,
    },
  ],

};

function BarChart() {
  return <Bar options={options} data={data} />;
}
export default BarChart;
