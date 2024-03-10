import { useMemo } from "react";

const PricingCard = ({
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
  getForFreeDisplay,
}) => {
  const pricingCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const vStackStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const getForFreeStyle = useMemo(() => {
    return {
      display: getForFreeDisplay,
    };
  }, [getForFreeDisplay]);

  return (
    <div
      className="flex-[0.7721] rounded-3xl bg-black shadow-[0px_2px_12px_rgba(20,_20,_43,_0.08)] flex flex-col items-start justify-start pt-[2.5rem] px-[2.5rem] pb-[2.688rem] box-border gap-[2.125rem_0rem] min-w-[16.438rem] max-w-full text-left text-[1.125rem] text-gray-400 font-h2 mq450:gap-[1.063rem_0rem] mq450:flex-1 mq750:pt-[1.625rem] mq750:pb-[1.75rem] mq750:box-border"
      style={pricingCardStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.125rem_0rem] mq450:gap-[1.063rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.063rem]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <b className="relative tracking-[-0.03em]">Pro</b>
            </div>
            <div className="rounded-3xs overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.75rem] whitespace-nowrap text-[0.813rem] font-body-s border-[1px] border-solid border-gray-500">
              <div className="relative tracking-[-0.02em] leading-[1.938rem] font-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,_#dd7dff,_#e1cd86_29.5%,_#8bcb92_51%,_#71c2ef_76.5%,_#3bffff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Most Popular
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_0.25rem] text-[3.375rem] text-neutral-100">
          <b className="relative tracking-[-0.06em] leading-[3.75rem] whitespace-nowrap mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
            $9
          </b>
          <div
            className="flex flex-col items-start justify-start pt-[0.537rem] px-[0rem] pb-[0rem] text-[1.125rem] text-darkgray"
            style={vStackStyle}
          >
            <div className="flex flex-col items-start justify-start gap-[0.888rem_0rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.475rem]">
                <div className="h-[0.35rem] w-[0.375rem] relative bg-darkgray opacity-[0]" />
              </div>
              <b className="relative tracking-[-0.03em] whitespace-nowrap">
                /monthly
              </b>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.625rem] px-[1.25rem] bg-neutral-100 self-stretch rounded-3xs flex flex-row items-start justify-center whitespace-nowrap hover:bg-gainsboro">
        <div
          className="relative text-[1rem] tracking-[-0.02em] font-medium font-body-s text-black text-left"
          style={getForFreeStyle}
        >
          Sign up now
        </div>
      </button>
      <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem] text-[0.875rem] text-neutral-100 font-body-s">
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">Up to 50 project members</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">Unlimited tasks and projects</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">50GB storage</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">Integrations</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">Priority support</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">Advanced support</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/icons-15.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
            <div className="relative">Export support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
