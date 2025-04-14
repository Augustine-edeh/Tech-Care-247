"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const MobileViewInfoDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setOpen(true);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Mobile View Notice</DialogTitle>
          <DialogDescription className="text-green-400">
            For the best experience and to manage your schedules with ease, we
            recommend using a desktop or tablet device.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MobileViewInfoDialog;
