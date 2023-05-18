import { React, useEffect } from "react";
import { StyledModal, StyledModalInfo } from "./Modal.styled";

export const Modal = ({ correct, toggleModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [toggleModal]);

  const closeModal = (e) => {
    console.dir(e.target);
    if (e.target === e.currentTarget || e.target.nodeName === "BUTTON")
      toggleModal();
  };

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalInfo>{correct ? "Correct" : "Try again"}</StyledModalInfo>
    </StyledModal>
  );
};
