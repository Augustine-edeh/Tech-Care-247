import Chart from "@/components/Chart";
import PatientInfoCard from "@/components/PatientInfoCard";
import PatientsList from "@/components/patients/PatientsList";
import { Button } from "@/components/ui/button";
import Clock from "@/components/ui/Clock";
import { Plus, SquareActivity } from "lucide-react";

const PatientsPage = () => {
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

  const appointments = [
    {
      type: "Consultation",
      date: "2024-09-05",
      time: "10:00 AM",
      doctor: "Dr. James Wilson",
    },
    {
      type: "Routine Checkup",
      date: "2024-09-12",
      time: "2:00 PM",
      doctor: "Dr. Linda Carter",
    },
    {
      type: "Follow-up",
      date: "2024-09-18",
      time: "11:30 AM",
      doctor: "Dr. Steve Roberts",
    },
    {
      type: "Lifestyle Counselling",
      date: "2024-09-22",
      time: "4:00 PM",
      doctor: "Dr. Anne Davis",
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

          <div className="col-span-9 flex flex-col gap-5 overflow-hidden bg-unnamed-color-ffffff rounded-2xl p-5">
            <Button className="self-end bg-unnamed-activestate-bg-1 text-black text-lg p-6 rounded-2xl">
              <Plus />
              Add New Patient
            </Button>

            <section className="grid grid-cols-12 grid-flow-col gap-5 flex-1">
              <div className="col-span-8 flex flex-col gap-5">
                <div>
                  <PatientInfoCard />
                </div>

                <div className="flex gap-5 flex-1">
                  <div className="w-1/2 flex flex-col gap-5">
                    <h4 className="text-2xl tracking-wide font-semibold">
                      Medical History & Vitals
                    </h4>
                    <div className="bg-purple-100 flex-1 p-5 rounded-2xl flex flex-col gap-3">
                      <div>
                        <Chart />
                      </div>

                      <hr className="border-1 border-gray-300 " />

                      <div className="flex-1 flex justify-between">
                        <div>
                          <h4>Respiratory rate</h4>
                          <p className="font-semibold text-2xl"> 79 bmp</p>
                          <p className="flex gap-2">
                            <SquareActivity />
                            Normal
                          </p>
                        </div>
                        <div>Part 2</div>
                        <div>Part 3</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 w-1/2 flex flex-col px-5 py-2 gap-5 rounded-t-2xl">
                    <div>
                      <h4 className="text-2xl font-medium tracking-wide">
                        Prescriptions
                      </h4>
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
                </div>
              </div>

              <div className="col-span-4 flex flex-col gap-5">
                <div className="rounded-2xl border p-5">
                  <h4 className="text-2xl">Appointments</h4>

                  <ul className="list-disc pl-5 space-y-3  overflow-y-auto">
                    {appointments.map((appointment, index) => (
                      <li key={index} className="bg-white/10 p-3 rounded-lg">
                        <p className="font-semibold text-lg">
                          {appointment.type}
                        </p>
                        <p className="text-sm opacity-90">
                          📅 {appointment.date}
                        </p>
                        <p className="text-sm opacity-90">
                          ⏰ {appointment.time}
                        </p>
                        <p className="text-sm opacity-90">
                          👨‍⚕️ {appointment.doctor}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border p-5">
                  <h4 className="text-2xl">Treatment Plan</h4>
                  <ul className="list-disc">
                    <li>Liposylyn</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PatientsPage;
