import Chart from "@/components/Chart";
import PatientInfoCard from "@/components/PatientInfoCard";
import PatientsList from "@/components/patients/PatientsList";
import { Button } from "@/components/ui/button";
import Clock from "@/components/ui/Clock";
import { Plus } from "lucide-react";

const PatientsPage = () => {
  return (
    <>
      <main className="flex flex-1 h-screen overflow-hidden">
        {/* Mobile View */}
        <div className="flex flex-col gap-5 w-full xl:hidden bg-unnamed-color-ffffff p-5">
          <Clock className="p-0" />

          <div className="flex flex-col flex-1">
            <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
              Patients
            </h3>

            <div className="grid place-items-center flex-1">
              <p>
                This is the <strong>Patients page</strong>.
              </p>
              <p className="opacity-45">All patients will be listed here.</p>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
          <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
            <PatientsList />
          </div>

          <div className="col-span-9 flex flex-col gap-5 overflow-hidden rounded- bg-unnamed-color-ffffff rounded-2xl p-5">
            <Button className="self-end bg-unnamed-activestate-bg-1 text-black text-lg p-6 rounded-2xl">
              <Plus />
              Add New Patient
            </Button>

            <section className="grid grid-flow-col gap-5 flex-1">
              <div className="col-span-8 flex flex-col gap-5">
                <PatientInfoCard />
                <div className="flex gap-5 flex-1">
                  <div className="w-1/2 bg-purple-100">
                    <Chart />
                  </div>
                  <div className="bg-blue-600 w-1/2">Left section, RHS</div>
                </div>
              </div>

              <div className="bg-green-500 col-span-4 flex flex-col gap-5">
                <h1>Right section</h1>
                <div className="bg-slate-400 h-72">Item 1</div>
                <div className="bg-slate-500 flex-1">Item 2</div>
                <div className="bg-slate-600 flex-1">Item 3</div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PatientsPage;
