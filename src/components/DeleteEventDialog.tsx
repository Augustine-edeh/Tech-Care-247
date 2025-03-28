import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEventStore } from "../../src/store/useEventStore";

const DeleteEventDialog = () => {
  const { selectedEvent, removeEvent, selectEvent } = useEventStore();

  const confirmDelete = () => {
    if (selectedEvent) {
      removeEvent(selectedEvent.id);
      selectedEvent.remove(); // Ensure FullCalendar updates
      selectEvent(null);
    }
  };

  return (
    <Dialog open={!!selectedEvent} onOpenChange={() => selectEvent(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <p>
          Are you sure you want to delete &quot;{selectedEvent?.title}&quot;?
        </p>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => selectEvent(null)}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={confirmDelete}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Yes, Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteEventDialog;
