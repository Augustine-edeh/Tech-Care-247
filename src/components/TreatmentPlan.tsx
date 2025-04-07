const TreatmentPlan = ({ className = "" }) => {
  const treatmentPlans = [
    "Eat a balanced diet daily with fruit & vegetables",
    "Walk for 30 minutes daily",
    "Monitor blood pressure daily",
    "Stay hydrated & aim for 7–8 hours of sleep each night",
  ];

  return (
    <div className={`flex flex-col gap-5 rounded-2xl border p-5 ${className}`}>
      <h4 className="text-2xl">Treatment Plan</h4>
      <ul className="flex flex-col gap-3 flex-1 list-disc pl-5">
        {treatmentPlans.map((plan, index) => (
          <li key={index}>{plan}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentPlan;
