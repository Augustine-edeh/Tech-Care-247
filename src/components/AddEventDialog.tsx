"use client";

import { useEventStore } from "@/store/useEventStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AddEventDialog = () => {
  const { isAddDialogOpen, closeAddDialog, addEvent, selectedDate } =
    useEventStore();
  const [newEventTitle, setNewEventTitle] = useState("");

  const handleAddEvent = () => {
    if (newEventTitle.trim() && selectedDate) {
      addEvent({
        id: String(Date.now()),
        title: newEventTitle,
        date: selectedDate,
      });
      setNewEventTitle("");
      closeAddDialog();
    }
  };

  return (
    <Dialog open={isAddDialogOpen} onOpenChange={closeAddDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
        </DialogHeader>
        <Input
          type="text"
          placeholder="Enter event title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <DialogFooter>
          <Button variant="outline" onClick={closeAddDialog}>
            Cancel
          </Button>
          <Button onClick={handleAddEvent} disabled={!newEventTitle.trim()}>
            Add Event
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventDialog;
