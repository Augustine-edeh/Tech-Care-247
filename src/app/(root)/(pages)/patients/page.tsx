import AddNewPatientButton from "@/components/AddNewPatientButton";
import Appointments from "@/components/Appointments";
import DesktopOnlyNotice from "@/components/DesktopOnlyNotice /DesktopOnlyNotice";
import LabResultsAndReports from "@/components/LabResultsAndReports";
import MedicalHistoryAndVitals from "@/components/MedicalHistoryAndVitals";
import PatientInfoCard from "@/components/PatientInfoCard";
import PatientsList from "@/components/patients/PatientsList";
import Prescriptions from "@/components/Prescriptions";
import TreatmentPlan from "@/components/TreatmentPlan";
import Clock from "@/components/ui/Clock";
import { Monitor } from "lucide-react";
import Link from "next/link";

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

            <DesktopOnlyNotice message="Switch to a desktop or larger screen to access the Patients page." />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
          <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
            <PatientsList />
          </div>

          <div className="col-span-9 flex flex-col gap-5 overflow-hidden bg-unnamed-color-ffffff rounded-2xl p-5">
            <AddNewPatientButton />

            <section className="grid grid-cols-12 gap-5 flex-1 min-h-0">
              {/* Left Column */}
              <div className="col-span-8 flex flex-col gap-5">
                <PatientInfoCard />

                <div className="flex gap-5 flex-1">
                  <MedicalHistoryAndVitals />
                  <Prescriptions />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-4 flex flex-col gap-5 flex-1 min-h-0">
                <Appointments />
                <TreatmentPlan />
                <LabResultsAndReports className="flex-1 min-h-0" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PatientsPage;
