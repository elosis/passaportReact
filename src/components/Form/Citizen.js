import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Citizen() {
  const { citizen, setCitizen } = useContext(PasContext);
  return (
    <div className="citizen-con">
      <div className="citizen">
        Citizen ID :
        <input
          type="number"
          value={citizen}
          onChange={(event) => setCitizen(event.target.value)}
        />
      </div>
    </div>
  );
}
