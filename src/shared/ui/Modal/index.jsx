import { useState } from "react";
import ReactModal from "react-modal";

export function Modal({className, ...restProps, children}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onClose={closeModal}
      onOpen={openModal}
    >
      {children}
    </ReactModal>
  );
}
