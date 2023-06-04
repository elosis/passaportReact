import React from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function MobilePhone() {
  const { phone, handlePhoneChange, submitted } = useContext(PasContext);
  return (
    <div className="phone-con">
      <div>
        <div className="mobile-number">
          <div className="mobile-phone">Mobile Phone: </div>
          <div className="star">*</div>
        </div>
        <input
          country={"us"} // Default country
          value={phone}
          onChange={handlePhoneChange}
          className={submitted && phone === "" ? "error" : ""}
        />
        {submitted && phone === "" && (
          <p className="error-message">Phone is required.</p>
        )}
      </div>
    </div>
  );
}
