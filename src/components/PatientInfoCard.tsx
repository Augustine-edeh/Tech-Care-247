"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Pencil, MessageSquare, Phone, Calendar } from "lucide-react";
import usePatientsStore from "@/store/usePatientsStore";

const PatientInfoCard = () => {
  const { selectedPatient } = usePatientsStore();

  const actionButtons = [
    {
      title: "Edit",
      icon: <Pencil size={16} />,
      backgroundColor: "bg-unnamed-activestate-bg-1 text-black",
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
    <div className="flex flex-col gap-5 p-4 border rounded-lg">
      {/* Patient Information */}
      <section className="flex gap-5 items-center">
        <div className="size-36">
          <Image
            src={
              selectedPatient?.profile_picture || "/default-profile-image.png"
            }
            height={100}
            width={100}
            className="rounded-full h-full w-full"
            alt={selectedPatient?.name || "patient-photo"}
          />
        </div>

        <div className="flex flex-col gap-6 h-full">
          <h3 className="text-3xl font-bold">
            {selectedPatient?.name || "-- --"}
          </h3>
          <div>
            <p className="text-lg text-gray-700 mb-3">
              Aged: {selectedPatient?.age}
            </p>
            <p className="text-lg text-gray-700">
              Insurance Provider: {selectedPatient?.insurance_type}
            </p>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="flex gap-x-3">
        {actionButtons.map((button) => (
          <Button
            key={button.title}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md ${button.backgroundColor} hover:bg-unnamed-color-0bd984 hover:text-white`}
          >
            {button.icon} {button.title}
          </Button>
        ))}
      </section>
    </div>
  );
};

export default PatientInfoCard;
