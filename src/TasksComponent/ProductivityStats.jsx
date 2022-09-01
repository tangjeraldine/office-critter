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
  setHighest,
  highest,
  setSecond,
  second,
  setThird,
  third,
  setFourth,
  fourth,
  setCount,
  count,
  setHighestDone,
  highestDone,
  setSecondDone,
  secondDone,
  setThirdDone,
  thirdDone,
  setFourthDone,
  fourthDone,
}) {
  const hLength = highest.length;
  const sLength = second.length;
  const tLength = third.length;
  const fLength = fourth.length;

  let totalDone = highestDone + secondDone + thirdDone + fourthDone;

  const data = {
    labels: ["High Priority", "Important", "Urgent", "Low Priority"],
    datasets: [
      {
        label: "Completed",
        data: [highestDone, secondDone, thirdDone, fourthDone],
        backgroundColor: "rgba(157, 177, 223, 0.2)", //light blue
        borderColor: "rgba(0, 71, 229, 0.3)", //blue
      },
      {
        label: "Pending Tasks",
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

  const handleReset = () => {
    setHighest([]);
    setSecond([]);
    setThird([]);
    setFourth([]);
    setHighestDone(0);
    setSecondDone(0);
    setThirdDone(0);
    setFourthDone(0);
    setCount(0);
  };

  return (
    <div className='grid grid-cols-2'>
      <div>
        <label for='my-modal-6' class='btn modal-button'>
          RESET EVERYTHING
        </label>
        <input type='checkbox' id='my-modal-6' class='modal-toggle' />
        <div class='modal modal-bottom sm:modal-middle'>
          <div class='modal-box'>
            <h3 class='font-bold text-2xl text-black'>
              Are you sure you want to reset?
            </h3>
            <p class='py-4 text-black'>
              All information will be wiped. <br /> If you aren't sure, click
              "No" to keep your existing list.
            </p>
            <div className='grid grid-cols-2'>
              <div class='modal-action'>
                <label for='my-modal-6' class='btn' onClick={handleReset}>
                  Erase it all.
                </label>
              </div>
              <div class='modal-action'>
                <label for='my-modal-6' class='btn'>
                  No, take me back.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              The blue area shows how much you've completed in each area. The
              red area shows how many tasks you still have left. Ideally, you
              don't want to see anymore red left on your chart.
            </p>
          </label>
        </label>
      </div>
    </div>
  );
}

export default ProductivityStats;
