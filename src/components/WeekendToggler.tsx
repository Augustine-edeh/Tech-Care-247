import { Checkbox } from "@/components/ui/checkbox";
import { useEventStore } from "@/store/useEventStore";

const WeekendToggler = () => {
  const { showWeekends, toggleWeekends } = useEventStore();

  return (
    <div className="flex gap-2 h-6 justify-center items-center w-fit">
      <Checkbox
        id="toggle-weekends"
        checked={showWeekends}
        onCheckedChange={toggleWeekends}
        aria-label="Toggle weekends visibility"
      />

      <label
        htmlFor="toggle-weekends"
        className="text-sm font-medium leading-none"
      >
        Show Weekends
      </label>
    </div>
  );
};

export default WeekendToggler;
