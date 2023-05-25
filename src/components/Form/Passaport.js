import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Passaport() {
  const { passaport, setPassaport } = useContext(PasContext);
  return (
    <div className="passport-con">
      <div className="passport">
        Passport No :
        <input
          type="number"
          value={passaport}
          onChange={(event) => setPassaport(event.target.value)}
          className="passaport-input"
        />
      </div>
    </div>
  );
}
