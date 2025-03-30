import Image from "next/image";
import { Button } from "./ui/button";
import { Pencil, MessageSquare, Phone, Calendar } from "lucide-react";

const PatientInfoCard = ({ selectedPatient }) => {
  const actionButtons = [
    {
      title: "Edit",
      icon: <Pencil size={16} />,
      backgroundColor: "bg-blue-500 text-white",
    },
    {
      title: "Message",
      icon: <MessageSquare size={16} />,
      backgroundColor: "bg-gray-100 text-gray-700",
    },
    {
      title: "Call",
      icon: <Phone size={16} />,
      backgroundColor: "bg-gray-100 text-gray-700",
    },
    {
      title: "Schedule",
      icon: <Calendar size={16} />,
      backgroundColor: "bg-gray-100 text-gray-700",
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-4 border rounded-lg shadow-md bg-white">
      {/* Patient Information */}
      <section className="flex gap-5 items-center">
        <Image
          src={selectedPatient.image}
          height={80}
          width={80}
          className="rounded-full"
          alt={selectedPatient.name}
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{selectedPatient.name}</p>
          <p className="text-sm text-gray-600">Aged: {selectedPatient.age}</p>
          <p className="text-sm text-gray-600">
            Insurance Provider: {selectedPatient.insuranceprovider}
          </p>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="flex gap-x-3">
        {actionButtons.map((button) => (
          <Button
            key={button.title}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md ${button.backgroundColor}`}
          >
            {button.icon} {button.title}
          </Button>
        ))}
      </section>
    </div>
  );
};

export default PatientInfoCard;
