import PatientsList from "@/components/patients/PatientsList";
import TransactionTable from "@/components/TransactionTable";
import { transactions } from "@/data/transactions";
import Clock from "@/components/ui/Clock";
import { Monitor } from "lucide-react";
import Link from "next/link";
import DesktopOnlyNotice from "@/components/DesktopOnlyNotice /DesktopOnlyNotice";

const TransactionPage = () => {
  return (
    <main className="flex flex-1 h-screen overflow-hidden">
      {/* Mobile View */}
      <div className="flex flex-col gap-5 w-full xl:hidden bg-unnamed-color-ffffff p-5">
        <Clock className="p-0" hasLabel={false} />
        <div className="flex flex-col flex-1">
          <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
            Transactions
          </h3>

          <DesktopOnlyNotice message="Switch to a desktop or larger screen to access transaction records." />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
        <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
          <PatientsList />
        </div>

        <div className="flex flex-col col-span-6 overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
          <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
            Transactions
          </h3>
          <TransactionTable data={transactions} />
        </div>

        <div className="col-span-3 overflow-hidden rounded-2xl">
          <Clock />
        </div>
      </div>
    </main>
  );
};

export default TransactionPage;
