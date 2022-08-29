// import { DoughNutChart } from "./Doughnut";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ProductivityStats({
  highest,
  second,
  third,
  fourth,
  count,
  highestDone,
  secondDone,
  thirdDone,
  fourthDone,
}) {
  const hLength = highest.length;
  const hDone = hLength - highestDone.length;
  const sLength = second.length;
  const tLength = third.length;
  const fLength = fourth.length;
  const data = {
    labels: [
      "High Priority",
      "Important",
      "Urgent",
      "Low Priority",
      "Completed Tasks",
      "Orange",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [hLength, sLength, tLength, fLength, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const totalDone = highestDone + secondDone + thirdDone + fourthDone;
  return (
    <div>
      <label for='my-modal-4' class='btn modal-button'>
        View Productivity Stats
      </label>
      <progress class='progress w-56' value={totalDone} max={count}></progress>
      <input type='checkbox' id='my-modal-4' class='modal-toggle' />
      <label for='my-modal-4' class='modal cursor-pointer'>
        <label class='modal-box relative' for=''>
          <Doughnut data={data} />
        </label>
      </label>
    </div>
  );
}

export default ProductivityStats;
