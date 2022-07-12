import Logo from "../public/CatwikiLogo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-8 md:max-w-[700px] xl:max-w-[1248px] mx-auto pl-[18px] md:pl-0">
      <Link href="/">
        <div className="cursor-pointer">
          <Logo className="fill-black" width="128" height="43" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
