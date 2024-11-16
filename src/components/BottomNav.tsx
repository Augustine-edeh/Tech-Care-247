import { Users, Calendar, MessageSquare } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="xl:hidden bg-white border-t py-2">
      <div className="flex justify-around">
        {[
          { icon: Users, label: "Patients" },
          { icon: Calendar, label: "Schedule" },
          { icon: MessageSquare, label: "Messages" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="p-3 text-gray-400 hover:text-blue-600 flex flex-col items-center"
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
