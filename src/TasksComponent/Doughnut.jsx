import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "High Priority",
    "Done",
    "Important",
    "Done",
    "Urgent",
    "Done",
    "Low Priority",
    "Done",
  ],
  datasets: [
    {
      label: "Task Status",
      data: [hLength, hDone, sLength, sDone, tLength, tDone, fLength, fDone],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)", //red
        "rgba(250, 204, 204, 0.8)", //pink
        "rgba(235, 86, 0, 0.8)", //orange
        "rgba(235, 186, 158, 0.8)", //light orange
        "rgba(0, 71, 229, 0.8)", //blue
        "rgba(157, 177, 223, 0.8)", //light blue
        "rgba(1, 220, 204, 0.8)", //mint
        "rgba(147, 221, 215, 0.8)", //light mint
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.2)", //red
        "rgba(255, 99, 132, 0.2)", //red
        "rgba(235, 86, 0, 0.8)", //orange
        "rgba(235, 86, 0, 0.8)", //orange
        "rgba(0, 71, 229, 0.8)", //blue
        "rgba(0, 71, 229, 0.8)", //blue
        "rgba(1, 220, 204, 0.8)", //mint
        "rgba(1, 220, 204, 0.8)", //mint
      ],
      borderWidth: 3,
    },
  ],
};

export function DoughNutChart() {
  return <Doughnut data={data} />;
}
