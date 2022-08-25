import PersonalInfoModal from "./PersonalInfoModal";

function GetInTouch() {
  return (
    <div>
      <div class='text-center lg:text-left'>
        <h1 class='text-2xl font-mono '>
          Love coffee too? Get in touch with me and we can grab a mug!
        </h1>
      </div>
      <br />
      <div class='flex flex-row'>
        <div class='basis-1/4 md:basis-1/3'>
          <label class='label text-2xl'>
            <span class='label-text'>Your Email</span>
          </label>
          <input
            type='text'
            placeholder='myemail@site.com'
            class='input input-bordered'
          />
        </div>
        <div class='basis-1/4 md:basis-1/3'>
          <label class='label text-2xl'>
            <span class='label-text'>Your LinkedIn</span>
          </label>
          <input
            type='text'
            placeholder='linkedin.com/myprofile'
            class='input input-bordered'
          />
        </div>
        <div class='basis-1/2 md:basis-1/3'>
          <button class='btn btn-primary'>Submit</button>
        </div>

        <PersonalInfoModal />
      </div>
    </div>
  );
}
export default GetInTouch;
