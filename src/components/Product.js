import FrameLogoGroup from "./FrameLogoGroup";

const Product = () => {
  return (
    <section className="ml-[0rem] mb-[5.75rem] w-full flex flex-col items-start justify-start py-[0rem] px-[5.063rem] box-border max-w-[113%] shrink-0 text-center text-[0.813rem] text-black font-body-s lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border">
      <div className="self-stretch [background:linear-gradient(180deg,_#fff,_#d2dcff)] flex flex-col items-start justify-start pt-[7rem] px-[3.125rem] pb-[6.625rem] box-border relative gap-[2.5rem_0rem] max-w-full lg:pt-[4.563rem] lg:pb-[4.313rem] lg:box-border mq750:gap-[1.25rem_0rem] mq750:pt-[2.938rem] mq750:px-[1.563rem] mq750:pb-[2.813rem] mq750:box-border">
        <div className="w-[75rem] h-[93.438rem] relative [background:linear-gradient(180deg,_#fff,_#d2dcff)] hidden max-w-full z-[0]" />
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <div className="w-[33.75rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-left">
              <div className="h-[1.688rem] rounded-3xs box-border overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0.75rem] whitespace-nowrap z-[1] border-[1px] border-solid border-gray-600">
                <div className="mt-[-0.125rem] relative tracking-[-0.02em] leading-[1.938rem] font-medium">
                  Boost your productivity
                </div>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-[3.375rem] tracking-[-0.06em] leading-[3.75rem] font-bold font-h2 text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
              A more effective way to track progress
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.156rem] box-border max-w-full text-[1.375rem] text-midnightblue">
              <h3 className="m-0 h-[6.188rem] flex-1 relative text-inherit tracking-[-0.04em] leading-[1.938rem] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </h3>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <img
          className="w-full flex justify-center items-center ml-44"
          src="/Product Image.png"/>
        </div>
        <div className="self-stretch relative z-[1] flex items-center justify-center">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full z-[1] object-contain absolute left-[0rem] top-[0.25rem] w-full h-full [transform:scale(1.187)]"
            alt=""
            src="/product-image@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] z-[1] text-left text-[1.125rem] font-h2">
          <FrameLogoGroup
            icons="/icons-2.svg"
            integrationEcosystem="Integration ecosystem"
            trackYourProgressAndMotiv="Track your progress and motivate"
            yourEffortsEveryday="your efforts everyday."
          />
          <FrameLogoGroup
            icons="/icons-4.svg"
            integrationEcosystem="Goal setting and tracking"
            trackYourProgressAndMotiv="Set and track goals with"
            yourEffortsEveryday="manageable task breakdowns."
            propAlignSelf="stretch"
          />
          <FrameLogoGroup
            icons="/icons-6.svg"
            integrationEcosystem="Secure data encryption"
            trackYourProgressAndMotiv="Ensure your data’s safety with top-"
            yourEffortsEveryday="tier encryption."
            propAlignSelf="unset"
          />
          <FrameLogoGroup
            icons="/icons-8.svg"
            integrationEcosystem="Customizable notifications"
            trackYourProgressAndMotiv="Get alerts on tasks and deadlines"
            yourEffortsEveryday="that matter most."
            propAlignSelf="stretch"
          />
        </div>
        <img
          className="w-[15.5rem] h-[15.5rem] absolute !m-[0] bottom-[27.313rem] left-[-5.062rem] object-cover z-[2]"
          alt=""
          src="/torus 1.png"
        />
        <img
          className="w-[16.375rem] h-[16.375rem] absolute !m-[0] top-[33rem] right-[-5.062rem] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/pyramid-1@2x.png"
        />
      </div>
    </section>
  );
};

export default Product;
