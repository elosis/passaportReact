import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Citizen() {
  const { citizen, handleCitizenChange } = useContext(PasContext);
  return (
    <div className="citizen-con">
      <div className="citizen">
        Citizen ID :
        <input type="text" value={citizen} onChange={handleCitizenChange} />
      </div>
    </div>
  );
}
