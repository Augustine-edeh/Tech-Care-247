import { SquareActivity } from "lucide-react";
import Chart from "./Chart";

const MedicalHistoryAndVitals = () => {
  return (
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
          <div>
            <h4>Respiratory rate</h4>
            <p className="font-semibold text-2xl"> 79 bmp</p>
            <p className="flex gap-2">
              <SquareActivity />
              Normal
            </p>
          </div>
          <div>
            <h4>Respiratory rate</h4>
            <p className="font-semibold text-2xl"> 79 bmp</p>
            <p className="flex gap-2">
              <SquareActivity />
              Normal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryAndVitals;
