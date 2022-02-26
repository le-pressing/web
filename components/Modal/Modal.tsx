import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import Image from "next/image";

import styles from "./Modal.module.scss";

interface ModalProps {
  close: () => void;
  children: React.ReactNode;
}

export default function Modal({ close, children }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={close}>
          X
        </span>
        {children}
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
}
