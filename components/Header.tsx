import Logo from "../public/CatwikiLogo.svg";

const Header = () => {
  return (
    <div className="py-8 max-w-[1248px] mx-auto">
      <Logo className="fill-black" width="128" height="43" />
    </div>
  );
};

export default Header;
