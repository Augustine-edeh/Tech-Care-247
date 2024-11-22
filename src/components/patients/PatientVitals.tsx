"use client";

import usePatientsStore from "@/store/usePatientsStore";
import VitalCard from "./VitalCard";

const PatientVitals = () => {
  const { selectedPatient } = usePatientsStore((state) => ({
    selectedPatient: state.selectedPatient,
  }));

  const diagnosis = selectedPatient?.diagnosis_history?.[0];

  if (!diagnosis) {
    return <p>No diagnosis data available for the selected patient.</p>;
  }

  return (
    <section className="flex flex-col xl:flex-row justify-between items-center gap-5">
      <VitalCard
        label="Respiratory rate"
        value={diagnosis.respiratory_rate?.value}
        levels={diagnosis.respiratory_rate?.levels}
        unit="bpm"
        bgColor="bg-[#E0F3FA]"
        iconSrc="/respiratory rate.svg"
      />
      <VitalCard
        label="Temperature"
        value={diagnosis.temperature?.value}
        levels={diagnosis.temperature?.levels}
        unit="°F"
        bgColor="bg-[#FFE6E9]"
        iconSrc="/temperature.svg"
      />
      <VitalCard
        label="Heart rate"
        value={diagnosis.heart_rate?.value}
        levels={diagnosis.heart_rate?.levels}
        unit="bpm"
        bgColor="bg-[#FFE6F1]"
        iconSrc="/HeartBPM.svg"
      />
    </section>
  );
};

export default PatientVitals;
