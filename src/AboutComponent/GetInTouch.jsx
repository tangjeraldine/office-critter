import PersonalInfoModal from "./PersonalInfoModal";
import SubmitInfoButton from "./SubmitInfoButton";

function GetInTouch() {
  return (
    <div className='max-w-3xl relative left-60 '>
      <div className='text-center '>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2118/2118634.png'
          className='max-h-40 float-left'
        />
        <h1 className='text-2xl font-bold font-mono '>
          Love coffee too? <br /> Get in touch with me and we can grab a mug!
        </h1>
      </div>
      <br />
      <div className='flex flex-row grid-cols-4 space-x-6'>
        <div className='basis-1/4 md:basis-1/3'>
          {" "}
          <PersonalInfoModal />
        </div>
        <div className='basis-1/4 md:basis-1/3'>
          <label className='label font-bold '>
            <span className='label-text text-1xl text-white font-serif'>
              Your Email
            </span>
          </label>
          <input
            type='text'
            placeholder='myemail@site.com'
            className='input input-bordered text-1xl text-black font-serif'
          />
        </div>
        <div className='basis-1/4 md:basis-1/3'>
          <label className='label text-4xl font-bold'>
            <span className='label-text text-1xl text-white font-serif'>
              Your LinkedIn
            </span>
          </label>
          <input
            type='text'
            placeholder='linkedin.com/myprofile'
            className='input input-bordered text-1xl text-black font-serif'
          />
        </div>
        <div className='basis-1/4 md:basis-1/3'>
          <SubmitInfoButton />
        </div>
      </div>
      <br />
      <h3 className='text-sm'>
        This webpage was built using React Vite and VSCode.
      </h3>
      <h3 className='text-sm text-white'>
        <a href='https://github.com/tangjeraldine/react-office-critter-app'>
          Visit my GitHub Repo for this website.
        </a>
      </h3>
    </div>
  );
}
export default GetInTouch;
