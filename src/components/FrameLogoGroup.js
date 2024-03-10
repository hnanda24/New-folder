import { useMemo } from "react";

const FrameLogoGroup = ({
  icons,
  integrationEcosystem,
  trackYourProgressAndMotiv,
  yourEffortsEveryday,
  propAlignSelf,
}) => {
  const bodyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[2.563rem] box-border gap-[0.625rem_0rem] min-w-[12.813rem] max-w-[16.25rem] text-left text-[1.125rem] text-black font-h2">
      <img
        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={icons}
      />
      <b className="relative tracking-[-0.03em]">{integrationEcosystem}</b>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem_0rem] text-[1rem] font-body-s">
        <div
          className="self-stretch relative tracking-[-0.01em] leading-[1.438rem]"
          style={bodyStyle}
        >
          <p className="m-0">{trackYourProgressAndMotiv}</p>
          <p className="m-0">{yourEffortsEveryday}</p>
        </div>
        <div className="h-[2.688rem] rounded-3xs flex flex-row items-center justify-center py-[0.625rem] px-[0rem] box-border gap-[0rem_0.25rem]">
          <div className="relative tracking-[-0.01em] leading-[1.438rem] whitespace-nowrap">
            Learn more
          </div>
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameLogoGroup;
