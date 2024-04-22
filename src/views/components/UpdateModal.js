import React from "react";
import { createPortal } from "react-dom";
import ERemove from "../../images/icons/e-remove";
import WarningSign from "../../images/icons/warning-sign";

export default function UpdateModal({
  open,
  children,
  onClose,
  title,
  icon,
  subtitle,
  subject,
}) {
  return createPortal(
    <>
      <div
        className={`update-modal-overlay ${
          open ? "update-modal-overlay-on" : ""
        }`}
        onClick={onClose}
      ></div>
      <div className={`update-modal ${open ? "update-modal-active" : ""}`}>
        <button onClick={onClose}>
          <ERemove />
        </button>
        {icon}
        <div className="update-modal__container">
          <h2>{title}</h2>
          {subtitle ? (
            <div className="modal-subtitle">
              <span>{subtitle}</span>
              <div>
                <div>
                  <WarningSign />
                </div>
                <p>
                  You'll be signed out of any devices after changing your{" "}
                  {subject}.
                </p>
              </div>
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
