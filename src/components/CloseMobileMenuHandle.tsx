import useMobileNavStore from "@/store/useMobileNavStore";

const CloseMobileMenuHandle = () => {
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);

  return (
    <div className="ml-auto h-8 px-3 flex justify-end items-center bg-zinc-300 font-bold">
      <button className="px-2" onClick={toggleIsOpen}>
        X
      </button>
    </div>
  );
};

export default CloseMobileMenuHandle;
