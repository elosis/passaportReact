import React, { createContext, useContext, useState } from "react";

const PasContext = createContext();

export default function PasProvider(props) {
  const [selectedGender, setSelectedGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("Afghanistan");
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("Mr");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNationalityChange = (event) => {
    const value = event.target.value;
    setNationality(value);
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // const deletedUser = () => {
  //   setUsers((prevUsers) => [!prevUsers]);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      const user = {
        firstName: firstName,
        lastName: lastName,
        gender: selectedGender,
        phone: phone,
        nationality: nationality,
      };
      addUser(user);
      setFirstName("");
      setLastName("");
      setPhone("");
      setSelectedGender(null);
      setNationality("");
    }
    setGender("");
    setPhone("");
  };

  const data = {
    title,
    setTitle,
    lastName,
    setLastName,
    selectedGender,
    setSelectedGender,
    users,
    setUsers,
    firstName,
    setFirstName,
    gender,
    setGender,
    phone,
    setPhone,
    nationality,
    setNationality,
    handleGenderChange,
    addUser,
    handleTitleChange,
    handleSubmit,
    handleNameChange,
    handlePhoneChange,
    handleNationalityChange,
    handleFirstNameChange,
    handleLastNameChange,
    // deletedUser,
  };

  return (
    <PasContext.Provider value={data}>{props.children}</PasContext.Provider>
  );
}

export { PasProvider, PasContext, useContext };
