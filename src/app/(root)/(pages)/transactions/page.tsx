import PatientsList from "@/components/patients/PatientsList";
import TransactionTable from "@/components/TransactionTable";
import { transactions } from "@/data/transactions";
import Clock from "@/components/ui/Clock";
import { Monitor } from "lucide-react";
import Link from "next/link";

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

          <div
            className="flex flex-col justify-center items-center flex-1 text-center rounded-md shadow-md"
            role="alert"
          >
            <Monitor className="w-8 h-8 text-unnamed-color-072635 mb-2 animate-iconFadeIn opacity-60" />
            <p className="text-lg font-semibold text-unnamed-color-072635 leading-7 animate-fadeIn delay-1000">
              Switch to a desktop or larger screen to access transaction
              records.
            </p>
            <Link href={""} className="text-blue-700 hover:text-blue-800">
              Learn more...
            </Link>
          </div>
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
