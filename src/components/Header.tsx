import Image from "next/image";
import Navbar from "./Navbar";
import User from "./User";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[20px] md:px-[33px] h-[72px] bg-unnamed-color-ffffff rounded-[70px]">
      <Logo />
      <Navbar />
      <User />
      <MobileNav />
    </header>
  );
};

export default Header;
