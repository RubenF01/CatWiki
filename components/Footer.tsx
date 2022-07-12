import Logo from "../public/CatwikiLogo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-9 max-w-[1248px] mx-auto bg-black rounded-t-3xl pl-[108px] pr-8 flex justify-between">
      <Logo fill="#FFFFFF" width="128" height="43" />
      <h1 className="flex text-white cursor-default">
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
