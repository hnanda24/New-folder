import { useMemo } from "react";

const FrameParent = ({
  showThisPageIs,
  thisPageIsWidth,
  rectangleParentAlignSelf,
  rectangleParentWidth,
  logoGap,
  aboutGap,
}) => {
  const ellipseParentStyle = useMemo(() => {
    return {
      width: thisPageIsWidth,
    };
  }, [thisPageIsWidth]);

  const thisPageIsStyle = useMemo(() => {
    return {
      alignSelf: rectangleParentAlignSelf,
      width: rectangleParentWidth,
    };
  }, [rectangleParentAlignSelf, rectangleParentWidth]);

  const navBarDesktopStyle = useMemo(() => {
    return {
      gap: logoGap,
    };
  }, [logoGap]);

  const stackStyle = useMemo(() => {
    return {
      gap: aboutGap,
    };
  }, [aboutGap]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-[0.875rem] text-gray-400 font-h2">
      <div className="self-stretch bg-black flex flex-row items-center justify-center py-[0.875rem] px-[1.25rem] box-border max-w-full">
        <div
          className="flex flex-row flex-wrap items-center justify-center gap-[0.5rem] max-w-full"
          style={ellipseParentStyle}
        >
          {showThisPageIs && (
            <div className="relative mq750:hidden" style={thisPageIsStyle}>
              This page is included in a free SaaS Website Kit.
            </div>
          )}
          <div className="flex flex-row items-center justify-start gap-[0rem_0.188rem] text-neutral-100">
            <div className="relative mq750:hidden">View the complete Kit</div>
            <img
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icons.svg"
            />
          </div>
        </div>
      </div>
      <header
        className="self-stretch bg-lavender [backdrop-filter:blur(14px)] flex flex-row items-center justify-between py-[1.25rem] px-[0.969rem] box-border gap-[1.25rem] max-w-full text-left text-[0.875rem] text-black font-body-s"
        style={navBarDesktopStyle}
      >
        <div className="flex flex-row items-center justify-center py-[0rem] px-[1.25rem] gap-[0rem_0.5rem]">
          <div className="h-[2.563rem] w-[2.5rem] relative">
            <div className="absolute h-[80.49%] w-full top-[14.63%] right-[0%] bottom-[4.88%] left-[0%] [background:linear-gradient(89.43deg,_#f87bff,_#fb92cf_24.06%,_#ffdd9b_48.2%,_#c2f0b1_72.84%,_#2fd8fe)] [filter:blur(11px)]" />
            <img
              className="absolute h-[97.56%] w-full top-[0%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logosaas@2x.png"
            />
          </div>
          <div className="relative whitespace-nowrap">made by</div>
          <img
            className="h-[1.375rem] w-[4.25rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/blackhorizontal-1.svg"
          />
        </div>
        <div
          className="w-[35.25rem] flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border gap-[0rem_1.5rem] max-w-full text-[1rem] text-gray-200 mq450:hidden"
          style={stackStyle}
        >
          <div className="relative tracking-[-0.01em] leading-[1.438rem]">
            About
          </div>
          <div className="relative tracking-[-0.01em] leading-[1.438rem]">
            Features
          </div>
          <div className="relative tracking-[-0.01em] leading-[1.438rem]">
            Customers
          </div>
          <div className="relative tracking-[-0.01em] leading-[1.438rem]">
            Updates
          </div>
          <div className="relative tracking-[-0.01em] leading-[1.438rem]">
            Help
          </div>
          <button className="cursor-pointer [border:none] py-[0.625rem] px-[0.938rem] bg-black rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray">
            <div className="relative text-[1rem] tracking-[-0.02em] font-medium font-body-s text-neutral-100 text-left">
              Get for free
            </div>
          </button>
        </div>
      </header>
    </section>
  );
};

export default FrameParent;
