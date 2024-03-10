const GroupComponent = () => {
  return (
    <section className="self-stretch h-[44.375rem] relative [background:linear-gradient(201.28deg,_#eaeefe,_#183ec2)] text-left text-[0.813rem] text-black font-body-s">
      <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(201.28deg,_#eaeefe,_#183ec2)] w-full h-full hidden" />
      <div className="absolute top-[6.594rem] left-[2.688rem] rounded-3xs box-border h-[1.813rem] overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.75rem] whitespace-nowrap z-[1] border-[1px] border-solid border-gray-600">
        <div className="mt-[-0.062rem] relative tracking-[-0.02em] leading-[1.938rem] font-medium">
          Version 2.0 is here
        </div>
      </div>
      <h1 className="m-0 absolute top-[10.219rem] left-[2.688rem] text-[5.625rem] tracking-[-0.06em] leading-[5.625rem] font-bold font-h2 text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[31.938rem] h-[12.063rem] z-[1] mq450:text-[1.688rem] mq450:leading-[2.25rem] mq750:text-[2.813rem] mq750:leading-[3.375rem]">
        Pathway to productivity
      </h1>
      <h3 className="m-0 absolute top-[24.094rem] left-[2.688rem] text-[1.375rem] tracking-[-0.04em] leading-[1.938rem] font-normal font-inherit text-midnightblue inline-block w-[28.563rem] h-[6.188rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </h3>
      <button className="cursor-pointer [border:none] py-[0.625rem] px-[0.938rem] bg-black absolute top-[32.125rem] left-[2.688rem] rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkslategray">
        <div className="relative text-[1rem] tracking-[-0.02em] font-medium font-body-s text-neutral-100 text-left">
          Get for free
        </div>
      </button>
      <div className="absolute top-[32.094rem] left-[10.938rem] rounded-3xs flex flex-row items-start justify-start py-[0.625rem] px-[0rem] gap-[0rem_0.25rem] z-[1] text-[1rem]">
        <div className="relative tracking-[-0.02em] font-medium whitespace-nowrap">
          Learn more
        </div>
        {/* <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
          loading="lazy"
          alt=""
          src="public/visual1@2x.png"
        />  */}
      </div>
      <div className="absolute top-[0.563rem] right-[4.813rem] w-[46.875rem] h-[41.188rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-[13.5rem] h-[12.313rem] object-cover z-[2]"
          alt=""
          src="/cylinder-1@2x.png"
        />
        <img
          className="absolute top-[0.688rem] right-[1.375rem] w-[40.5rem] h-[40.5rem] object-contain z-[3]"
          alt=""
          src="/visual@2x.png"
        />
      </div>
      <img
        className="absolute right-[-4.381rem] bottom-[-6.875rem] w-[19.9rem] h-[19.9rem] object-contain z-[4]"
        alt=""
        src="/halftorus-1@2x.png"
      />
    </section>
  );
};

export default GroupComponent;
