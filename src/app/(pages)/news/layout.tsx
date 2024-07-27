import Header from "@/components/Header";
import PatientsList from "@/components/PatientsList";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-[18px] p-[19px] bg-[#F6F7F8] min-h-dvh">
      <Header />
      <main className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:border-red-600    lg:grid-cols-12 -[1195px]">
        <PatientsList className={"hidden order-1  xl:block xl:col-span-3"} />

        {children}
      </main>
    </div>
  );
};

export default NewsLayout;
