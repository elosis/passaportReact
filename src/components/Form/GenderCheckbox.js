import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function GenderCheckbox() {
  const { selectedGender, handleGenderChange } = useContext(PasContext);

  return (
    <div className="gender-con">
      <span>Gender: </span>
      <div className="gender">
        <input
          id="male"
          type="checkbox"
          checked={selectedGender === "male"}
          value="male"
          onChange={handleGenderChange}
          className="checkbox-round"
        />
        <label htmlFor="male">male</label>
      </div>
      <div className="gender">
        <input
          id="female"
          type="checkbox"
          checked={selectedGender === "female"}
          value="female"
          onChange={handleGenderChange}
          className="checkbox-round"
        />
        <label htmlFor="female">female</label>
      </div>
      <div className="gender">
        <input
          id="unisex"
          type="checkbox"
          checked={selectedGender === "unisex"}
          value="unisex"
          onChange={handleGenderChange}
          className="checkbox-round"
        />
        <label htmlFor="unisex">unisex</label>
      </div>
    </div>
  );
}
