import { Calendar, TrendingUp } from "lucide-react";

const Appointments = ({ className = "" }) => {
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
    <div className={`flex flex-col rounded-2xl border p-5 ${className}`}>
      <h4 className="text-2xl">Appointments</h4>

      {/* <ul className="flex-1 list-disc pl-5 space-y-3 overflow-y-auto">
        {appointments.map((appointment, index) => (
          <li key={index} className="bg-white/10 p-3 rounded-lg">
            <p className="font-semibold text-lg">{appointment.type}</p>
            <p className="text-sm opacity-90">📅 {appointment.date}</p>
            <p className="text-sm opacity-90">⏰ {appointment.time}</p>
            <p className="text-sm opacity-90">👨‍⚕️ {appointment.doctor}</p>
          </li>
        ))}
      </ul> */}

      <ul className="flex flex-col justify-between">
        <li>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Calendar />
              <div className="">
                <p className="font-bold">Consultaion</p>
                <p className="opacity-70">Scheduled</p>
              </div>
            </div>
            <span>10:00 AM</span>
          </div>
        </li>

        <li>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp />
              <div className="">
                <p className="font-bold">Follow-up</p>
                <p className="opacity-70">Past</p>
              </div>
            </div>
            <span>Feb 20 2024</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Appointments;
