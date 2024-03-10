import { useMemo } from "react";

const FrameComponent = ({ integrations, dedicatedAccountManager, propGap }) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem] text-left text-[0.875rem] text-black font-body-s">
      <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
          alt=""
          src="/icons-10.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
          <div className="relative">{integrations}</div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[0rem_0.938rem]"
        style={frameDivStyle}
      >
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
          alt=""
          src="/icons-10.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
          <div className="relative">{dedicatedAccountManager}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
