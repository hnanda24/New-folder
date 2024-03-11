import FrameParent from "../components/FrameParent";
import GroupComponent from "../components/GroupComponent";
import LogoTicker from "../components/LogoTicker";
import Product from "../components/Product";
import Emojistar from "../components/Emojistar";
import SectionFrame from "../components/SectionFrame";
// import FooterContent from "../components/FooterContent";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

const Desktop = () => {
  return (
    <div className="w-full relative bg-neutral-100 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <FrameParent showThisPageIs />
      <GroupComponent />
      <LogoTicker />
      <Product />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[10.688rem] box-border max-w-full text-left text-[0.813rem] text-black font-body-s mq750:pb-[4.5rem] mq750:box-border mq1050:pb-[6.938rem] mq1050:box-border">
        <div className="w-[62rem] flex flex-col items-center justify-start gap-[3.75rem_0rem] max-w-full mq1050:gap-[1.875rem_0rem]">
          <div className="w-[33.75rem] flex flex-col items-center justify-start gap-[1.25rem_0rem] max-w-full">
            <div className="w-[10.313rem] h-[1.688rem] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.625rem] px-[0.75rem] whitespace-nowrap border-[1px] border-solid border-gray-600">
              <div className="flex-1 relative tracking-[-0.02em] leading-[1.938rem] font-medium">
                Everything you need
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem_0rem] text-center text-[3.375rem] text-midnightblue font-h2">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.06em] leading-[3.75rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
                Streamlined for easy management
              </h1>
              <h3 className="m-0 self-stretch h-[6.188rem] relative text-[1.375rem] tracking-[-0.04em] leading-[1.938rem] font-normal font-body-s inline-block shrink-0 mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                Enjoy customizable lists, team work tools, and smart tracking
                all in one place. Set tasks, get reminders, and see your
                progress simply and quickly.
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1.25rem] max-w-full text-center text-[1.625rem] text-midnightblue font-h2">
            <div className="flex-1 rounded-xl shadow-[0px_7px_24px_#24272b] box-border overflow-hidden flex flex-col items-center justify-center p-[2.5rem] min-w-[19.75rem] max-w-full border-[1px] border-solid border-gray-300 mq750:pt-[1.625rem] mq750:pb-[1.625rem] mq750:box-border">
              <img
                className="w-[20.563rem] h-[20.563rem] relative object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/cubehelix-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[0.563rem] box-border max-w-full">
                <h2 className="m-0 w-[16.625rem] relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[1.313rem] mq450:leading-[3rem]">
                  Integration ecosystem
                </h2>
                <div className="w-[21.563rem] relative text-[1rem] tracking-[-0.01em] leading-[1.438rem] font-body-s inline-block max-w-full">
                  <p className="m-0">
                    Enhance your productivity by connecting with your favorite
                    tools, keeping all your
                  </p>
                  <p className="m-0"> essentials in one place.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl shadow-[0px_7px_24px_#24272b] box-border overflow-hidden flex flex-col items-center justify-center p-[2.5rem] min-w-[19.75rem] max-w-full border-[1px] border-solid border-gray-300 mq750:pt-[1.625rem] mq750:pb-[1.625rem] mq750:box-border">
              <img
                className="w-[20.563rem] h-[20.563rem] relative object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/cubehelix-1-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[0.563rem] box-border max-w-full">
                <h2 className="m-0 w-[18.563rem] relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[1.313rem] mq450:leading-[3rem]">
                  Goal setting and tracking
                </h2>
                <div className="w-[21.563rem] relative text-[1rem] tracking-[-0.01em] leading-[1.438rem] font-body-s inline-block max-w-full">
                  Define and track your goals, breaking down objectives into
                  achievable tasks to keep your targets in sight.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Emojistar />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.438rem] box-border max-w-full text-left text-[0.813rem] text-black font-body-s">
        <div className="w-[33.75rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="rounded-3xs overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.75rem] border-[1px] border-solid border-gray-600">
              <div className="relative tracking-[-0.02em] leading-[1.938rem] font-medium">
                Testimonials
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-[3.375rem] tracking-[-0.06em] leading-[3.75rem] font-bold font-h2 text-transparent !bg-clip-text [background:linear-gradient(180deg,_#000,_#001354)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center mq450:text-[2rem] mq450:leading-[2.25rem] mq750:text-[2.688rem] mq750:leading-[3rem]">
            What our users say
          </h1>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-start pt-[2.563rem] pb-[4.563rem] pr-[1.25rem] pl-[2.875rem] box-border relative gap-[0.063rem_0rem] min-h-[54.813rem] max-w-full lg:pl-[1.438rem] lg:box-border mq450:pt-[1.25rem] mq450:pb-[1.938rem] mq450:box-border mq1050:pt-[1.688rem] mq1050:pb-[2.938rem] mq1050:box-border">
        <SectionFrame />
        {/* <FooterContent /> */}
        <div className="w-full h-[calc(100%_-_91px)] absolute !m-[0] top-[0rem] right-[0rem] bottom-[5.688rem] left-[0rem] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] z-[1]" />
      </section>
      <SignUp />
      <Footer />
    </div>
  );
};

export default Desktop;
