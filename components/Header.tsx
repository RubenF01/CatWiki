import Logo from "../public/CatwikiLogo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-8 max-w-[1248px] mx-auto">
      <Link href="/">
        <div className="cursor-pointer">
          <Logo className="fill-black" width="128" height="43" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
