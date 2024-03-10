const LogoTicker = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
      <div className="h-[8.25rem] flex-1 relative max-w-full">
        <img
          className="absolute top-[3.125rem] left-[18.288rem] w-[7.819rem] h-[2rem] object-cover"
          loading="lazy"
          alt=""
          src="/quantum-1@2x.png"
        />
        <img
          className="absolute top-[3.425rem] left-[54.225rem] w-[6.3rem] h-[1.394rem] object-cover"
          alt=""
          src="/pulse-1@2x.png"
        />
        <img
          className="absolute top-[3.244rem] left-[29.744rem] w-[10rem] h-[1.756rem] object-cover"
          loading="lazy"
          alt=""
          src="/echo-1@2x.png"
        />
        <img
          className="absolute top-[3.244rem] left-[43.381rem] w-[7.213rem] h-[1.756rem] object-cover"
          loading="lazy"
          alt=""
          src="/celestia-1@2x.png"
        />
        <img
          className="absolute top-[3.306rem] left-[64.169rem] w-[5.331rem] h-[1.7rem] object-cover"
          loading="lazy"
          alt=""
          src="/apex-1@2x.png"
        />
        <img
          className="absolute top-[3.125rem] left-[5.5rem] w-[9.15rem] h-[2rem] object-cover"
          loading="lazy"
          alt=""
          src="/acme-1@2x.png"
        />
        <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(90deg,_#fff,_rgba(255,_255,_255,_0)_49.92%,_#fff)] w-full h-full z-[1]" />
      </div>
    </section>
  );
};

export default LogoTicker;
