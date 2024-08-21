import Image from "next/image";
import Chart from "./Chart";
import DiagnosticListTable from "./DiagnosticListTable";
import LabResults from "./LabResults";
import PatientVitals from "./PatientVitals";
import { ClassNameType } from "../../types/Ui";

const PatientDiagnosisInfo = ({ className }: ClassNameType) => {
  return (
    <div className={`${className} flex flex-col gap-8 mt-[14px]`}>
      {/* Diagnosis History card */}
      <section className="bg-unnamed-color-ffffff w-[766p py-5 h-[673px rounded-[16px]">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635 mx-5">
          Diagnosis History
        </h3>

        <div className="sm:mx-5 mt-10 mb-5">
          {/* <Chart /> */}

          <div className="grid grid-cols-12 justify-center items-cente sm:items-start gap-[39px] p-[16px] h-[298px] md:h-[360px] rounded-xl bg-[#F4F0FE]">
            <section className="col-span-12 md:col-span-8 flex flex-col gap-y-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg text-[#072635]">
                  Blood Pressure
                </h1>

                <div className="flex gap-2">
                  <p>Last 6 months</p>
                  <Image
                    src="/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                    width={10}
                    height={10}
                    alt="month"
                  />
                </div>
              </div>

              <div className="h-full">
                {/* <Line data={chartData} options={options} /> */}

                <Chart />
              </div>
            </section>

            <section className="hidden md:col-span-4 md:flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                  <p className="h-4 w-4 rounded-full bg-[#E66FD2]" />
                  <h1>Systolic</h1>
                </div>

                <p>{`${160}`}</p>

                <div className="flex items-center gap-x-2">
                  <Image
                    src="/ArrowUp.svg"
                    width={10}
                    height={10}
                    alt="indicator"
                  />
                  <p>{`${"Higher than Average"}`}</p>
                </div>
              </div>
              <hr className="h-[1px] bg-unnamed-color-cbc8d4" />

              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                  <p className="h-4 w-4 rounded-full bg-[#8C6FE6]" />
                  <h1>Diastolic</h1>
                </div>
                <p>{`${78}`}</p>
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/ArrowDown.svg"
                    width={10}
                    height={10}
                    alt="indicator"
                  />
                  <p>{`${"Lower than Average"}`}</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mx-5">
          <PatientVitals />
        </div>
      </section>

      {/* Diagnostic List card */}
      <section className="bg-unnamed-color-ffffff w-[766px h-[349px h-full rounded-[16px] p-5">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
          Diagnostic List
        </h3>

        <DiagnosticListTable />
      </section>

      <LabResults className="lg:hidden" />
    </div>
  );
};

export default PatientDiagnosisInfo;
