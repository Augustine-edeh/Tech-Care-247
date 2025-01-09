import useMobileNavStore from "@/store/useMobileNavStore";
import { X } from "lucide-react";

const CloseMobileMenuHandle = () => {
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);

  return (
    <button
      className="active:bg-zinc-300/60 hover:bg-zinc-300/60 size-10 p-1 rounded-full"
      onClick={toggleIsOpen}
    >
      <X className="size-full rounded-full" />
    </button>
  );
};

export default CloseMobileMenuHandle;
