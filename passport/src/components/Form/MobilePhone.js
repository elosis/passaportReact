import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function MobilePhone() {
  const { phone, setPhone } = useContext(PasContext);
  return (
    <div className="phone-con">
      <div className="mobile-number">
        <div className="mobile-phone">Mobile Phone: </div>
        <div className="star">*</div>
      </div>
      <PhoneInput
        country={"us"} // Default country
        value={phone}
        onChange={(value) => setPhone(value)}
      />
    </div>
  );
}
