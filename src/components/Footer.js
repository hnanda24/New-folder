import LogoDefault from "./LogoDefault";

const Footer = () => {
  return (
    <footer className="self-stretch bg-neutral-100 overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border max-w-full z-[2] text-left text-[0.875rem] text-silver font-body-s">
      <div className="w-full bg-black flex flex-row items-start justify-between py-[2.5rem] px-[1.25rem] box-border max-w-[101%] shrink-0 gap-[1.25rem] mq750:flex-wrap">
        <LogoDefault />
        <div className="flex flex-row items-start justify-start gap-[0rem_3rem] max-w-full text-gray-100 mq450:flex-wrap mq450:gap-[0rem_1.5rem]">
          <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem]">
            <b className="relative text-neutral-100">Product</b>
            <div className="relative">Features</div>
            <div className="relative">Integrations</div>
            <div className="relative">Updates</div>
            <div className="relative">FAQ</div>
            <div className="relative">Pricing</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem]">
            <b className="relative text-neutral-100">Company</b>
            <div className="relative">About</div>
            <div className="relative">Blog</div>
            <div className="relative">Careers</div>
            <div className="relative">Manifesto</div>
            <div className="relative">Press</div>
            <div className="relative">Contact</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem]">
            <b className="relative text-neutral-100">Resources</b>
            <div className="relative">Examples</div>
            <div className="relative">Community</div>
            <div className="relative">Guides</div>
            <div className="relative">Docs</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.25rem_0rem]">
            <b className="relative text-neutral-100">Legal</b>
            <div className="relative">Privacy</div>
            <div className="relative">Terms</div>
            <div className="relative">Security</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
