import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Passaport() {
  const { passaport, handlePassaportChange } = useContext(PasContext);
  return (
    <div className="passport-con">
      <div className="passport">
        Passport No :
        <input
          type="number"
          value={passaport}
          onChange={handlePassaportChange}
          className="input-area passaport-input"
        />
      </div>
    </div>
  );
}
