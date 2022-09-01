function SubmitInfoButton() {
  return (
    <div className='text-black bg-slate-700'>
      <label
        className='text-white text-2xl font-bold font-serif cursor-pointer'
        for='my-modal-4'>
        Submit
      </label>

      <input type='checkbox' id='my-modal-4' class='modal-toggle' />
      <label for='my-modal-4' class='modal cursor-pointer'>
        <label class='modal-box relative' for=''>
          <h3 class='text-lg font-bold'>Submission successful.</h3>
          <p class='py-4'>
            Thanks for passing on your contact info! <br /> I'll be in touch
            with you as soon as i can.
          </p>
        </label>
      </label>
    </div>
  );
}
export default SubmitInfoButton;
