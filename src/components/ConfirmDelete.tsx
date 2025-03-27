import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  eventTitle?: string;
}

export function ConfirmDelete({
  isOpen,
  onClose,
  onConfirm,
  eventTitle,
}: ConfirmDeleteProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <p>Do you want to delete "{eventTitle}"?</p>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Yes, delete it!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
