import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Salary() {
  const { salary, setSalary } = useContext(PasContext);

  return (
    <div className="salary-con">
      <div className="salary">
        Expected Salary :<span className="star"> *</span>
        <input
          type="number"
          value={salary}
          onChange={(event) => {
            setSalary(event.target.value);
          }}
          step=".01"
        />
      </div>
    </div>
  );
}
