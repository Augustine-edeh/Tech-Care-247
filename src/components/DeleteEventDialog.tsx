import { useEventStore } from "../store/useEventStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteEventDialog = () => {
  const { selectedEvent, removeEvent, closeDeleteDialog } = useEventStore();

  const confirmDelete = () => {
    if (selectedEvent) {
      removeEvent(selectedEvent.id); // Remove from Zustand store
      closeDeleteDialog(); // Close dialog
    }
  };

  return (
    <Dialog open={!!selectedEvent} onOpenChange={closeDeleteDialog}>
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
            onClick={closeDeleteDialog}
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
