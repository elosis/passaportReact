import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Salary() {
  const { handleSubmit } = useContext(PasContext);

  return (
    <div className="submit-con">
      <span>THB</span>
      <button className="submit-edit" onClick={handleSubmit}>
        <span className="submit-edit-label">SUBMIT</span>
      </button>
      <button className="undo-cancel">
        <span className="undo-cancel-label">UNDO</span>
      </button>
    </div>
  );
}
