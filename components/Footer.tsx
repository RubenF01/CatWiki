import Logo from "../public/CatwikiLogo.svg";

const Footer = () => {
  return (
    <div className="py-9 max-w-[1248px] mx-auto bg-black rounded-t-3xl pl-[108px] pr-8 flex justify-between">
      <Logo fill="#FFFFFF" width="128" height="43" />
      <h1 className="text-white cursor-default">
        &#169; created by{" "}
        <span className="font-bold underline">Ruben Frias</span> -
        devChallenge.io 2021
      </h1>
    </div>
  );
};

export default Footer;
