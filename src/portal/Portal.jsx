import React, { useState } from "react";
import ReactDOM from "react-dom";
const container = document.getElementById("modal-root");

function Portal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Portal">
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"}
      </button>
      {open && <Modal />}
    </div>
  );
}

export default Portal;

function Modal() {
  return ReactDOM.createPortal(<div>Hello World</div>, container);
}