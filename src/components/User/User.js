import React from "react";
import "../../App.css";
import { PasContext, useContext } from "../../store/context";

export default function User() {
  const {
    users,
    setSelectedGender,
    setFirstName,
    setLastName,
    setPhone,
    setNationality,
    setBirthday,
    setTitle,
    setCitizen,
    setSalary,
    setPassaport,
    handleDelete,
  } = useContext(PasContext);
  return (
    <div className="user-container">
      <div className="user-cap">User</div>
      <div className="user-subcontainer">
        <div className="usernames">
          <div className="user-info">
            <input type="checkbox" value="" />
            <div className="user-info-name">NAME</div>
            <div className="user-info-deep-con">
              <div className="user-info-gender">GENDER</div>
              <div className="user-info-phone">MOBILE PHONE</div>
              <div className="user-info-nationality">NATIONALITY</div>
            </div>
          </div>
        </div>
      </div>
      {users.map((user, index) => (
        <div key={index} className="usernames">
          <div className="user-info">
            <input type="checkbox" value="" />
            <div className="user-info-name">
              {user.firstName} {user.lastName}
            </div>
            <div className="user-info-deep-con">
              <div className="user-info-gender">{user.gender}</div>
              <div className="user-info-phone">{user.phone}</div>
              <div className="user-info-nationality">{user.nationality}</div>
              <div className="edit-con">
                <button
                  className="submit-edit"
                  onClick={() => {
                    setSelectedGender(user.gender);
                    setFirstName(user.firstName);
                    setLastName(user.lastName);
                    setPhone(user.phone);
                    setNationality(user.nationality);
                    setBirthday(user.birthday);
                    setTitle(user.title);
                    setCitizen(user.citizen);
                    setSalary(user.salary);
                    setPassaport(user.passaport);
                  }}
                >
                  <span className="submit-edit-label">EDIT</span>
                </button>
                <button className="undo-cancel" onClick={handleDelete}>
                  <span className="undo-cancel-label">DELETE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
