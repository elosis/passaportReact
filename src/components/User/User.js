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
    row,
    handleRow,
  } = useContext(PasContext);
  return (
    <div>
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
      <div className="row">
        <div className="row-con">
          <div className="row-spacer"></div>
          <p className="row-caption">Rows per page: </p>
          <div className="row-input">
            <div className="row-select">
              <select value={row} onChange={handleRow}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
            <input
              aria-hidden="true"
              tabindex="-1"
              class="row-nativeInput"
            ></input>
            <svg className="row-icon">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          <p className="row-number">1-2 of 2</p>
          <div className="row-button">
            <button className="row-button-left">
              <span className="row-button-label">
                <svg className="row-button-left-icon">
                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                </svg>
              </span>
            </button>
            <button className="row-button-right">
              <span className="row-button-label">
                <svg className="row-button-right-icon">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
