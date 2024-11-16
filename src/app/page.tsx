import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="h-screen flex flex-col lg:gap-y-[18px] lg:p-[19px]">
      <Header />
      <Main />
    </div>
  );
}
