import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/TestLogo.svg"
      alt=""
      width={211}
      height={48}
      priority
      className="cursor-pointer"
    />
  );
};

export default Logo;
