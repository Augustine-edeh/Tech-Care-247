import { Plus } from "lucide-react";
import { Button } from "./ui/button";
const AddNewPatientButton = () => {
  return (
    <Button className="self-end bg-unnamed-activestate-bg-1 text-black text-lg p-6 rounded-2xl">
      <Plus />
      Add New Patient
    </Button>
  );
};

export default AddNewPatientButton;
