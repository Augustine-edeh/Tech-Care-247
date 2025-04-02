const TreatmentPlan = ({ className = "" }) => {
  return (
    <div className={`flex flex-col rounded-2xl border p-5 ${className}`}>
      <h4 className="text-2xl">Treatment Plan</h4>
      <ul className="flex-1 list-disc">
        <li>Liposylyn</li>
      </ul>
    </div>
  );
};

export default TreatmentPlan;
