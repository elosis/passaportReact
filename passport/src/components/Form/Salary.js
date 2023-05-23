import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Salary() {
  const { addUser } = useContext(PasContext);

  return (
    <div className="salary-con">
      <div className="salary">
        Expected Salary :<span className="star"> *</span>
        <input type="number" id="amount" name="amount" step=".01" />
      </div>
    </div>
  );
}
