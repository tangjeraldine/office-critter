import { useState } from "react";

function TaskReminder({ highest, second, third, fourth }) {
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const [hide4, setHide4] = useState(true);

  const handleHide1 = () => {
    setHide1(false);
  };

  const handleHide2 = () => {
    setHide2(false);
  };
  const handleHide3 = () => {
    setHide3(false);
  };
  const handleHide4 = () => {
    setHide4(false);
  };

  return (
    <div>
      {highest.length > 0 && hide1 === true ? (
        <div class='alert alert-warning shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            <span>
              Reminder: You still have {highest.length} High Priority Task(s)
              pending! Take a short break, and attend to them soon.
            </span>
          </div>{" "}
          <div class='flex-none'>
            <button class='btn btn-sm btn-ghost' onClick={handleHide1}>
              Ok, fine
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {second.length > 0 && hide2 === true ? (
        <div class='alert alert-info shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            <span>
              Reminder: You still have {second.length} Important Task(s)
              pending. They aren't listed as urgent, but you may wish to find
              time after your break to attend to them.
            </span>
          </div>{" "}
          <button class='btn btn-sm btn-ghost' onClick={handleHide2}>
            Yep yep
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {third.length > 0 && hide3 === true ? (
        <div class='alert alert-success shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            <span>
              Reminder: You still have {third.length} Urgent Task(s) pending.
              They aren't listed as important, but you may wish to clear
              distracting tasks before they become a necessity.
            </span>
          </div>{" "}
          <button class='btn btn-sm btn-ghost' onClick={handleHide3}>
            Okie dokie
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {fourth.length > 0 && hide4 === true ? (
        <div class='alert shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            <span>
              Reminder: You have {fourth.length} Low Priority Task(s) pending.
            </span>
          </div>{" "}
          <button class='btn btn-sm btn-ghost' onClick={handleHide4}>
            Ok, fine
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default TaskReminder;
