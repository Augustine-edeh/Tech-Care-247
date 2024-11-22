import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/TestLogo.svg"
        alt="Logo"
        width={211}
        height={48}
        priority
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
