import Header from "@/components/Header";
import PatientsList from "@/components/PatientsList";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-[18px] p-[19px] bg-[#F6F7F8] min-h-dvh">
      <Header />
      <main className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:border-red-600    lg:grid-cols-12 -[1195px]">
        <PatientsList className={"hidden order-1  xl:block xl:col-span-3"} />

        {children}

        {/* <div
          className={`${"order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-emerald-400"} p-5`}
        >
          <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
            News feed
          </h3>
        </div>

        <div
          className={`${"order-1 lg:order-3 lg:col-span-4 xl:order-3 xl:col-span-3 bg-emerald-200 mt-[14px]"} p-5`}
        >
          <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
            Clock
          </h3>
        </div> */}
      </main>
    </div>
  );
};

export default NewsLayout;
