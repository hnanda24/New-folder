import PricingCard from "./PricingCard";
import FrameComponent from "./FrameComponent";

const Emojistar = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[3rem] pb-[8.625rem] box-border max-w-full text-center text-[0.813rem] text-black font-body-s lg:pb-[5.625rem] lg:box-border mq750:pl-[1.5rem] mq750:pr-[1.5rem] mq750:pb-[3.625rem] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem_0rem] max-w-full mq750:gap-[1.25rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[33.75rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-left">
              <div className="h-[1.688rem] rounded-3xs box-border overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0.75rem] whitespace-nowrap border-[1px] border-solid border-gray-600">
                <div className="mt-[-0.125rem] relative tracking-[-0.02em] leading-[1.938rem] font-medium">
                  Boost your productivity
                </div>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-[3.375rem] tracking-[-0.06em] leading-[3.75rem] font-bold font-h2 text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
              A more effective way to track progress
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.156rem] box-border max-w-full text-[1.375rem] text-midnightblue">
              <h3 className="m-0 h-[6.188rem] flex-1 relative text-inherit tracking-[-0.04em] leading-[1.938rem] font-normal font-inherit inline-block max-w-full mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </h3>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center gap-[0rem_1.563rem] max-w-full text-left text-[1.125rem] font-h2 mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border min-w-[16.438rem] max-w-full text-[0.875rem]">
            <div className="self-stretch rounded-3xl bg-neutral-100 shadow-[0px_2px_12px_rgba(20,_20,_43,_0.08)] flex flex-col items-start justify-start pt-[2.5rem] px-[2.438rem] pb-[2.75rem] gap-[1.25rem_0rem] border-[1px] border-solid border-neutral-300 mq750:pt-[1.625rem] mq750:pb-[1.813rem] mq750:box-border">
              <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.875rem] text-[1.125rem] text-neutral-600">
                <b className="relative tracking-[-0.03em]">Free</b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.875rem] gap-[2.125rem_0rem] text-[3.375rem] mq450:gap-[1.063rem_0rem]">
                <div className="flex flex-row items-start justify-start gap-[0rem_0.25rem]">
                  <b className="relative tracking-[-0.06em] leading-[3.75rem] whitespace-nowrap mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
                    $0
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[0.537rem] px-[0rem] pb-[0rem] text-[1.125rem] text-neutral-600">
                    <div className="flex flex-col items-start justify-start gap-[0.888rem_0rem]">
                      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.475rem]">
                        <div className="h-[0.35rem] w-[0.375rem] relative bg-neutral-100 opacity-[0]" />
                      </div>
                      <b className="relative tracking-[-0.03em] whitespace-nowrap">
                        /monthly
                      </b>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[0.625rem] px-[4.031rem] bg-black self-stretch rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                  <div className="relative text-[1rem] tracking-[-0.02em] font-medium font-body-s text-neutral-100 text-left">
                    Get started for free
                  </div>
                </button>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem] font-body-s">
                <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.688rem_0rem]">
                    <div className="relative">Up to 5 project members</div>
                    <div className="relative">Unlimited tasks and projects</div>
                    <div className="relative">2GB storage</div>
                    <div className="relative">Integrations</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem] font-body-s">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">Basic support</div>
                </div>
              </div>
            </div>
          </div>
          <PricingCard />
          <div className="flex-[0.7721] rounded-3xl bg-neutral-100 shadow-[0px_2px_12px_rgba(20,_20,_43,_0.08)] box-border flex flex-col items-start justify-start pt-[2.5rem] px-[2.438rem] pb-[2.75rem] gap-[2.125rem_0rem] min-w-[16.438rem] max-w-full border-[1px] border-solid border-neutral-300 mq450:gap-[1.063rem_0rem] mq450:flex-1 mq750:pt-[1.625rem] mq750:pb-[1.813rem] mq750:box-border">
            <b className="relative tracking-[-0.03em] text-neutral-600">
              Business
            </b>
            <div className="flex flex-row items-start justify-start gap-[0rem_0.25rem] text-[3.375rem]">
              <b className="relative tracking-[-0.06em] leading-[3.75rem] whitespace-nowrap mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
                $19
              </b>
              <div className="flex flex-col items-start justify-start pt-[0.537rem] px-[0rem] pb-[0rem] text-[1.125rem] text-neutral-600">
                <div className="flex flex-col items-start justify-start gap-[0.888rem_0rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.475rem]">
                    <div className="h-[0.35rem] w-[0.375rem] relative bg-neutral-100 opacity-[0]" />
                  </div>
                  <b className="relative tracking-[-0.03em] whitespace-nowrap">
                    /monthly
                  </b>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0.625rem] px-[1.25rem] bg-black self-stretch rounded-3xs flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkslategray">
              <div className="relative text-[1rem] tracking-[-0.02em] font-medium font-body-s text-neutral-100 text-left">
                Sign up now
              </div>
            </button>
            <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem] text-[0.875rem] font-body-s">
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">Up to 5 project members</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">Unlimited tasks and projects</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">200GB storage</div>
                </div>
              </div>
              <FrameComponent
                integrations="Integrations"
                dedicatedAccountManager="Dedicated account manager"
              />
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">Custom fields</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">Advanced analytics</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.219rem] px-[0rem] pb-[0rem]">
                  <div className="relative">Export capabilities</div>
                </div>
              </div>
              <FrameComponent
                integrations="API access"
                dedicatedAccountManager="Advanced security features"
                propGap="0rem 1rem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emojistar;
