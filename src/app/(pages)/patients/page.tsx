import BottomNav from "@/components/BottomNav";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
const PatientsPage = () => {
  return (
    <div className="h-screen flex flex-col lg:gap-y-5 lg:p-5 bg-unnamed-page-bg">
      <Header />
      <Main />
      <BottomNav />
    </div>
  );
};

export default PatientsPage;
