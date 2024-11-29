"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import User from "./ui/UserCard";
import CloseMobileMenuHandle from "./ui/CloseMobileMenuHandle";
import useMobileNavStore from "@/store/useMobileNavStore";
import Navbar from "./Navbar";
import { LogOut } from "lucide-react";

const Menu = () => {
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);
  const isOpen = useMobileNavStore((state) => state.isOpen);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleIsOpen();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleIsOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black z-10"
              onClick={toggleIsOpen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Menu */}
            <motion.div
              className="bg-white fixed top-0 right-0 h-full w-80 z-40"
              initial={{ x: "100%" }} // Start off-screen to the right
              animate={{ x: 0 }} // Slide in
              exit={{ x: "100%" }} // Slide out
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between border-b-2 p-5 mb-5">
                <User variant="menu" />
                <CloseMobileMenuHandle />
              </div>

              <Navbar />

              <section className="absolute bottom-0 w-full p-3 border-t-2 border-gray-300">
                <button className="flex items-center gap-3 px-4 py-4 w-full bg-primaryBlue hover:bg-secondaryBlue text-white rounded-md">
                  <LogOut />
                  <span>Logout</span>
                </button>
              </section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
