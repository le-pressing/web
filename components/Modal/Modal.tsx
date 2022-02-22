import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

import styles from "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => {};
  children: React.ReactNode;
}

export default function Modal({ show, onClose, children }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const close = (e: React.MouseEvent<HTMLSpanElement>) => {
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={close}>
          X
        </span>
        {children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
}
