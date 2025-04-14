import BottomNav from "@/components/BottomNav";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";

import PatientsList from "@/components/patients/PatientsList";
import TransactionTable from "@/components/TransactionTable";
import Clock from "@/components/ui/Clock";

const TransactionPage = () => {
  const transactionsData = [
    {
      id: "TXN001",
      patient: "Emily Williams",
      amount: "₦25,000",
      date: "2025-04-13",
      status: "Completed",
    },
    {
      id: "TXN002",
      patient: "Ryan Johnson",
      amount: "₦15,500",
      date: "2025-04-12",
      status: "Pending",
    },
  ];

  return (
    <>
      <main className="flex flex-1 h-screen overflow-hidden">
        {/* Mobile View */}
        <div className="flex flex-col gap-5 w-full xl:hidden bg-unnamed-color-ffffff p-5">
          <Clock className="p-0" />

          <div className="flex flex-col flex-1">
            <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
              Transactions
            </h3>

            <div className="grid place-items-center flex-1">
              No transaction records yet.
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

            {/* <div className="grid place-items-center flex-1">
              No transaction records yet.
            </div> */}

            <TransactionTable data={transactionsData} />
          </div>

          <div className="col-span-3 overflow-hidden rounded-2xl">
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
};

export default TransactionPage;
