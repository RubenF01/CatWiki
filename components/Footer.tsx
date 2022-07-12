import Logo from "../public/CatwikiLogo.svg";
import Link from "next/link";
import { useMedia } from "react-use";

const Footer = () => {
  const isWide = useMedia("(min-width: 1440px)", false);

  return (
    <div className="py-[34px] md:py-9 max-w-[339px] md:max-w-[700px] xl:max-w-[1248px] mx-auto bg-black rounded-t-3xl pl-[29px] md:pl-[108px] pr-8 flex flex-col md:flex-row justify-between">
      <Logo
        fill="#FFFFFF"
        width={isWide ? "128" : "73"}
        height={isWide ? "43" : "30"}
      />
      <h1 className="flex text-[10px] text-white cursor-default md:text-base pt-[15px] md:pt-0">
        &#169; created by{" "}
        <Link href="https://rubenfrias.com/">
          <a target="_blank" className="block pl-1 pr-1 font-bold underline">
            Ruben Frias
          </a>
        </Link>{" "}
        - devChallenge.io 2021
      </h1>
    </div>
  );
};

export default Footer;
