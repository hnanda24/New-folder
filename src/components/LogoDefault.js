import { useMemo } from "react";

const LogoDefault = ({ propMinWidth, propPadding }) => {
  const logoDefaultStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const logoGroupStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-[15rem] flex flex-col items-start justify-start gap-[6.938rem_0rem] text-left text-[0.875rem] text-silver font-body-s"
      style={logoDefaultStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem_0rem]">
        <div className="w-[2.5rem] h-[2.563rem] relative">
          <div className="absolute h-[80.49%] w-full top-[14.63%] right-[0%] bottom-[4.88%] left-[0%] [background:linear-gradient(89.43deg,_#f87bff,_#fb92cf_24.06%,_#ffdd9b_48.2%,_#c2f0b1_72.84%,_#2fd8fe)] [filter:blur(11px)]" />
          <img
            className="absolute h-[97.56%] w-full top-[0%] right-[0%] bottom-[2.44%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/logosaas-1@2x.png"
          />
        </div>
        <div className="self-stretch relative">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[0.688rem]"
        style={logoGroupStyle}
      >
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          alt=""
          src="/socials.svg"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          alt=""
          src="/socials-1.svg"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          alt=""
          src="/socials-2.svg"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          alt=""
          src="/socials-3.svg"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          alt=""
          src="/socials-4.svg"
        />
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          alt=""
          src="/socials-5.svg"
        />
      </div>
    </div>
  );
};

export default LogoDefault;
