import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[18px] p-[19px]">
      <Header />
      <Main />
    </div>
  );
}
