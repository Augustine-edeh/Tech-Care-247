const TreatmentPlan = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-5 rounded-2xl border p-5 ${className}`}>
      <h4 className="text-2xl">Treatment Plan</h4>
      <ul className="flex flex-col gap-3 flex-1 list-disc pl-5">
        <li>Liposylyn</li>
        <li>Chemotherapy</li>
      </ul>
    </div>
  );
};

export default TreatmentPlan;
