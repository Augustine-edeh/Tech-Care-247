import Image from "next/image";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

const PatientInfoCard = (selectedPatient) => {
  const actionButtons = [
    {
      title: "edit",
      icon: "pencil",
      backgroundColor: "unnamed-activestate-bg-1",
    },
    {
      title: "message",
      icon: "message",
      backgroundColor: "gray-100",
    },
    {
      title: "call",
      icon: "call",
      backgroundColor: "gray-100",
    },
    {
      title: "schedule",
      //   icon: "pencil",
      backgroundColor: "gray-100",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <section className="flex gap-5">
        <Image
          src={selectedPatient.image}
          height={100}
          width={100}
          alt={selectedPatient.name}
        />
        <div className="flex flex-col">
          <p>{selectedPatient.name}</p>
          <p>Aged: {selectedPatient.age}</p>
          <p>Insurance Provider: {selectedPatient.insuranceprovider}</p>
        </div>
      </section>

      <section className="flex gap-x-3">
        {actionButtons.map((button) => (
          <Button key={button.title} className={`bg-${button.backgroundColor}`}>
            <Pencil /> Edit
          </Button>
        ))}
      </section>
    </div>
  );
};

export default PatientInfoCard;
