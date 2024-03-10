const SignUp = () => {
  return (
    <section className="self-stretch h-[29.5rem] relative bg-neutral-100 overflow-hidden shrink-0 max-w-full text-center text-[3.375rem] text-midnightblue font-h2">
      <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_#fff,_#d2dcff)] w-full overflow-hidden flex flex-col items-start justify-start pt-[8.25rem] px-[20.625rem] pb-[8.375rem] box-border max-w-full h-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[10.313rem] mq750:pr-[10.313rem] mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[2.5rem_0rem] max-w-full mq750:gap-[1.25rem_0rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem_0rem] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[3.75rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
              Sign up for free today
            </h1>
            <div className="w-[27.938rem] relative text-[1rem] tracking-[-0.01em] leading-[1.438rem] font-body-s inline-block max-w-full">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0rem_1.063rem] text-left text-[1rem] text-black font-body-s">
            <button className="cursor-pointer [border:none] py-[0.625rem] px-[0.938rem] bg-black rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray">
              <div className="relative text-[1rem] tracking-[-0.02em] font-medium font-body-s text-neutral-100 text-left">
                Get for free
              </div>
            </button>
            <div className="rounded-3xs flex flex-row items-center justify-center py-[0.625rem] px-[0rem] gap-[0rem_0.25rem]">
              <div className="relative tracking-[-0.02em] font-medium whitespace-nowrap">
                Learn more
              </div>
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                alt=""
                src="/icons-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[-0.312rem] left-[-1.25rem] w-[22.625rem] h-[22.625rem] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/emojistar-1@2x.png"
      />
      <img
        className="absolute top-[1.063rem] left-[90.375rem] w-[22.688rem] h-[22.688rem] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/helix2-1@2x.png"
      />
    </section>
  );
};

export default SignUp;
