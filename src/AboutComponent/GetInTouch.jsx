import PersonalInfoModal from "./PersonalInfoModal";

function GetInTouch() {
  return (
    <div className='max-w-3xl relative left-60 '>
      <div className='text-center lg:text-left'>
        <h1 className='text-2xl font-mono '>
          Love coffee too? <br /> Get in touch with me and we can grab a mug!
        </h1>
      </div>
      <br />
      <div className='flex flex-row grid-cols-4 space-x-6'>
        <div className='basis-1/4 md:basis-1/3'>
          <label className='label font-bold '>
            <span className='label-text text-2xl text-white'>Your Email</span>
          </label>
          <input
            type='text'
            placeholder='myemail@site.com'
            className='input input-bordered text-1xl text-black'
          />
        </div>
        <div className='basis-1/4 md:basis-1/3'>
          <label className='label text-4xl font-bold'>
            <span className='label-text text-2xl text-white'>
              Your LinkedIn
            </span>
          </label>
          <input
            type='text'
            placeholder='linkedin.com/myprofile'
            className='input input-bordered text-1xl text-black'
          />
        </div>
        <div className='basis-1/2 md:basis-1/3'>
          <button className='btn btn-outline btn-success'>Submit</button>
        </div>

        <PersonalInfoModal />
      </div>
    </div>
  );
}
export default GetInTouch;
