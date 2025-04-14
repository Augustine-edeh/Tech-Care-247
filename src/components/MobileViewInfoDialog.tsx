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

const MobileViewDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setOpen(true);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl bg-unnamed-color-ffffff shadow-xl border-none xl:hidden">
        <DialogHeader>
          <DialogTitle className="text-unnamed-color-072635 text-xl font-bold">
            Mobile View Notice
          </DialogTitle>
          <DialogDescription className="text-unnamed-color-072635/70">
            For the best experience and to manage your schedules effectively, we
            recommend using a desktop or tablet device.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={() => setOpen(false)}
            className="bg-unnamed-color-072635 text-white hover:bg-unnamed-color-072635/90"
          >
            Got it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MobileViewDialog;
