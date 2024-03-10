const FooterContent = () => {
  return (
    <div className="w-[63.5rem] flex flex-row items-start justify-center gap-[0rem_1.281rem] max-w-full text-left text-[1rem] text-black font-body-s mq1050:flex-wrap">
      <div className="flex-[0.7538] rounded-xl bg-neutral-100 shadow-[0px_7px_14px_#eaeaea] box-border flex flex-col items-start justify-start py-[2.5rem] px-[2.438rem] gap-[1.25rem_0rem] min-w-[15.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq450:flex-1">
        <div className="self-stretch relative tracking-[-0.01em] leading-[1.438rem]">
          This app has completely transformed how I manage my projects and
          deadlines.
        </div>
        <div className="w-[11.125rem] flex flex-row items-center justify-start gap-[0rem_0.5rem] text-center">
          <img
            className="h-[2.625rem] w-[2.625rem] relative rounded-[50%] object-cover min-h-[2.625rem]"
            loading="lazy"
            alt=""
            src="/ellipse-1-6@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[5.5rem] relative tracking-[-0.02em] font-medium inline-block">
              Morgan Lee
            </div>
            <div className="self-stretch relative tracking-[-0.01em] leading-[1.438rem]">
              @morganleewhiz
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[1.438rem] px-[0rem] pb-[0rem] box-border min-w-[15.25rem] max-w-full">
        <div className="self-stretch rounded-xl bg-neutral-100 shadow-[0px_7px_14px_#eaeaea] flex flex-col items-start justify-start py-[2.5rem] px-[2.438rem] gap-[1.25rem_0rem] border-[1px] border-solid border-whitesmoke">
          <div className="self-stretch relative tracking-[-0.01em] leading-[1.438rem]">
            The customizability and integration capabilities of this app are
            top-notch.
          </div>
          <div className="w-[9rem] flex flex-row items-center justify-start gap-[0rem_0.5rem] text-center">
            <img
              className="h-[2.625rem] w-[2.625rem] relative rounded-[50%] object-cover min-h-[2.625rem]"
              loading="lazy"
              alt=""
              src="/ellipse-1-7@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[5.125rem] relative tracking-[-0.02em] font-medium inline-block">
                Riley Smith
              </div>
              <div className="self-stretch relative tracking-[-0.01em] leading-[1.438rem]">
                @rileysmith1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.7538] rounded-xl bg-neutral-100 shadow-[0px_7px_14px_#eaeaea] box-border flex flex-col items-start justify-start py-[2.5rem] px-[2.438rem] gap-[1.25rem_0rem] min-w-[15.25rem] max-w-full border-[1px] border-solid border-whitesmoke mq450:flex-1">
        <div className="self-stretch relative tracking-[-0.01em] leading-[1.438rem]">
          Its user-friendly interface and robust features support our diverse
          needs.
        </div>
        <div className="w-[9.438rem] flex flex-row items-center justify-start gap-[0rem_0.5rem] text-center">
          <img
            className="h-[2.625rem] w-[2.625rem] relative rounded-[50%] object-cover min-h-[2.625rem]"
            alt=""
            src="/ellipse-1-8@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative tracking-[-0.02em] font-medium">
              Casey Harper
            </div>
            <div className="w-[4.938rem] relative tracking-[-0.01em] leading-[1.438rem] inline-block">
              @casey09
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
