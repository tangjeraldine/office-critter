import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["High Priority", "Important", "Urgent", "Low Priority"],
  datasets: [
    {
      label: "Total No. of Tasks",
      data: [3, 2, 2, 1],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
    {
      label: "Completed",
      data: [2, 2, 2, 1],
      backgroundColor: "rgba(0, 71, 229, 0.8)",
      borderColor: "rgba(0, 71, 229, 0.8)",
      borderWidth: 2,
    },
  ],
};

export function RadarChart() {
  return <Radar data={data} />;
}
