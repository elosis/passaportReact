import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Salary() {
  const { salary, handleSalaryChange, submitted } = useContext(PasContext);

  return (
    <div className="salary-con">
      <div className="salary">
        Expected Salary :<span className="star"> *</span>
        <input
          type="number"
          value={salary}
          onChange={handleSalaryChange}
          step=".01"
          placeholder="X.XXX.XXX,XX"
          className={submitted && salary === "" ? "error" : ""}
        />
        {submitted && salary === "" && (
          <p className="error-message">Salary is required.</p>
        )}
      </div>
    </div>
  );
}
