function PersonalInfoModal() {
  return (
    <div className='text-black'>
      <label
        className='text-white font-bold underline cursor-pointer'
        for='my-modal-5'>
        Confidentiality Policy
      </label>

      <input type='checkbox' id='my-modal-5' class='modal-toggle' />
      <label for='my-modal-5' class='modal cursor-pointer'>
        <label class='modal-box relative' for=''>
          <h3 class='text-lg font-bold'>
            All information collected will remain strictly confidential and will
            not be circulated without permission from the owner.
          </h3>
          <p class='py-4'>
            All information from this website will be used solely for contact
            purposes only.
          </p>
        </label>
      </label>
    </div>
  );
}
export default PersonalInfoModal;
