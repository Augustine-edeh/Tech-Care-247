import PatientsList from "@/components/patients/PatientsList";
import Clock from "@/components/ui/Clock";
import { MessageCirclePlus } from "lucide-react";
const MessagePage = () => {
  return (
    <>
      <main className="flex flex-1 h-screen overflow-hidden">
        {/* Mobile View */}
        <div className="flex flex-col gap-5 w-full xl:hidden bg-unnamed-color-ffffff p-5">
          <Clock className="p-0" />

          <div className="flex flex-col flex-1">
            <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
              Messages
            </h3>

            <div className="grid place-content-center gap-2 flex-1">
              <button className="flex justify-center gap-4 px-4 py-3 rounded-lg bg-primaryBlue hover:bg-secondaryBlue text-white">
                Start chat <MessageCirclePlus />
              </button>
              <p>You have no message.</p>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
          <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
            <PatientsList />
          </div>

          <div className="flex flex-col col-span-6 overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
            <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
              Messages
            </h3>

            <div className="grid place-content-center gap-2 flex-1">
              <button className="flex justify-center gap-4 px-4 py-3 rounded-lg bg-primaryBlue hover:bg-secondaryBlue text-white">
                Start chat <MessageCirclePlus />
              </button>
              <p>You have no message.</p>
            </div>
          </div>

          <div className="col-span-3 overflow-hidden rounded-2xl">
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
};

export default MessagePage;
