import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Main from "@/components/Main";
export default function Home() {
  return (
    <div className="h-screen flex flex-col lg:gap-y-5 lg:p-5">
      <Header />
      <Main />
      <BottomNav />
    </div>
  );
}
