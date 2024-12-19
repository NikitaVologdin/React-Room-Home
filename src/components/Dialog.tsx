import { createPortal } from "react-dom";
import Nav from "../ui/Nav";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";

interface props {
  openDialog: boolean;
  onOpenDialog: (state: boolean) => void;
}

export default function Dialog({ openDialog, onOpenDialog }: props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openDialog) {
      dialogRef.current?.showModal();
    }
    if (!openDialog) {
      dialogRef.current?.close();
    }
  }, [openDialog]);

  const dialog = (
    <motion.dialog
      className="dialog"
      ref={dialogRef}
      id="dialog"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -200 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <button
        className="dialog__close"
        onClick={() => {
          onOpenDialog(false);
        }}
      >
        <span className="visually-hidden">Close menu</span>
        <img src="/images/icon-close.svg" alt="" width={16} height={16} />
      </button>
      <Nav className="dialog__nav" />
    </motion.dialog>
  );

  return createPortal(dialog, document.body);
}
