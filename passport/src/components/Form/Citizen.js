import React from "react";
import "../../App.css";

export default function Citizen() {
  return (
    <div className="citizen-con">
      <div className="citizen">
        Citizen ID :
        <input type="text" id="citizen" name="citizen" />
      </div>
    </div>
  );
}
