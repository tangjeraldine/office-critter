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
  const sLength = second.length;
  const tLength = third.length;
  const fLength = fourth.length;

  const totalDone = highestDone + secondDone + thirdDone + fourthDone;

  const data = {
    labels: ["High Priority", "Important", "Urgent", "Low Priority"],
    datasets: [
      {
        label: "Completed",
        data: [highestDone, secondDone, thirdDone, fourthDone],
        backgroundColor: "rgba(157, 177, 223, 0.8)", //light blue
        borderColor: "rgba(0, 71, 229, 0.8)", //blue
      },
      {
        label: "Total No. of Tasks",
        data: [hLength, sLength, tLength, fLength],
        backgroundColor: "rgba(250, 204, 204, 0.8)", //pink
        borderColor: "rgba(202, 0, 0, 0.8)", //red
      },
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        beginAtZero: true,
        animate: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 20,
          },
        },
      },
    },
  };

  return (
    <div>
      <label for='my-modal-4' class='btn modal-button'>
        Click to view completion status
      </label>
      <progress
        className='progress progress-warning w-64'
        value={totalDone}
        max={count}></progress>
      <input type='checkbox' id='my-modal-4' class='modal-toggle' />
      <label for='my-modal-4' class='modal cursor-pointer'>
        <label class='modal-box relative' for=''>
          <Radar data={data} options={options} />
          <p className='text-black'>
            The gap between your total and completed tasks shows you how much
            further you have to completing your day's work.
          </p>
        </label>
      </label>
    </div>
  );
}

export default ProductivityStats;
