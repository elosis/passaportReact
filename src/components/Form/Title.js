import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function Title() {
  const {
    title,
    handleTitleChange,
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    submitted,
  } = useContext(PasContext);

  return (
    <div className="title-name-container">
      <div className="title">
        Title :<span className="star"> *</span>
        <select
          name="genders"
          id="gender"
          value={title}
          onChange={handleTitleChange}
          className="input-area"
        >
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
        </select>
      </div>
      <div className="first-name">
        First Name :<span className="star"> *</span>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={handleFirstNameChange}
          className={`input-area ${
            submitted && firstName === "" ? "error" : ""
          }`}
        />
        {submitted && firstName === "" && (
          <p className="error-message">First Name is required.</p>
        )}
      </div>
      <div className="last-name">
        Last Name :<span className="star"> *</span>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={lastName}
          onChange={handleLastNameChange}
          className={`input-area ${
            submitted && lastName === "" ? "error" : ""
          }`}
        />
        {submitted && lastName === "" && (
          <p className="error-message">Last Name is required.</p>
        )}
      </div>
    </div>
  );
}
