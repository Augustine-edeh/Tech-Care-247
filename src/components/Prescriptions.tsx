import React from "react";

const Prescriptions = () => {
  const prescriptions = [
    {
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice a day",
      duration: "5 days",
    },
    {
      name: "Amoxicillin",
      dosage: "250mg",
      frequency: "Three times a day",
      duration: "7 days",
    },
    {
      name: "Ibuprofen",
      dosage: "400mg",
      frequency: "Once a day",
      duration: "3 days",
    },
    {
      name: "Metformin",
      dosage: "850mg",
      frequency: "Once daily",
      duration: "Ongoing",
    },
  ];

  return (
    <div className="border-l-2 w-1/2 flex flex-col gap-5 px-5 py-2 rounded-t-2xl">
      <h4 className="text-2xl tracking-wide">Prescriptions</h4>

      <ul className="flex flex-col gap-3 list-disc pl-5">
        {prescriptions.map((prescription, index) => (
          <li key={index}>
            {prescription.name} ({prescription.dosage}) -{" "}
            {prescription.frequency} for {prescription.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
