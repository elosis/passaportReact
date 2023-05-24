import React from "react";
import "../../App.css";
import GenderCheckbox from "./GenderCheckbox";
import MobilePhone from "./MobilePhone";
import Title from "./Title";
import BirthNation from "./BirthNation";
import Citizen from "./Citizen";
import Passaport from "./Passaport";
import Salary from "./Salary";
import Buttons from "./Buttons";

export default function Form() {
  return (
    <div className="form-container">
      <div className="form-subcontainer">
        <Title />
        <BirthNation />
        <Citizen />
        <GenderCheckbox />
        <MobilePhone />
        <Passaport />
        <div className="salary-button">
          <Salary />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
