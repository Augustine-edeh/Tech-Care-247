import Image from "next/image";

Image;
const SettingsIcon = () => {
  return (
    <Image
      src="/settings_FILL0_wght300_GRAD0_opsz24.svg"
      width={19}
      height={20}
      alt="settings"
      className="hidden xl:block cursor-pointer"
    />
  );
};

export default SettingsIcon;
