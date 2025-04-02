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
    <div className="border-l-2 w-1/2 flex flex-col px-5 py-2 gap-5 rounded-t-2xl">
      <div>
        <h4 className="text-2xl font-medium tracking-wide">Prescriptions</h4>
        <ul className="list-disc pl-5">
          {prescriptions.map((prescription, index) => (
            <li key={index}>
              {prescription.name} ({prescription.dosage}) -{" "}
              {prescription.frequency} for {prescription.duration}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prescriptions;
