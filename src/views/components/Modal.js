import React from "react";
import { createPortal } from "react-dom";
import ERemove from "../../images/icons/e-remove";

export default function Modal({ open, children, onClose }) {
  return createPortal(
    <>
      <div
        className={`modal-overlay ${open ? "modal-overlay-on" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`modal ${open ? "modal-active" : ""}`}>
        <button onClick={onClose}>
          <ERemove />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
