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
  const [citizen, setCitizen] = useState("");
  const [passaport, setPassaport] = useState("");
  const [salary, setSalary] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setSelectedGender("");
    setPhone("");
    setCitizen("");
    setNationality("Afghanistan");
    setTitle("Mr");
    setPassaport("");
    setSalary("");
  };

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

  const handleSalaryChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePassaportChange = (event) => {
    setPassaport(event.target.value);
  };

  const handleCitizenChange = (event) => {
    const value = event.target.value;

    // Remove any non-alphanumeric characters from the input
    const alphanumericOnly = value.replace(/[^a-zA-Z0-9]/g, "");

    // Format the input as "X-XXXX-XXXX-XX-X"
    let formattedValue = "";
    for (let i = 0; i < alphanumericOnly.length; i++) {
      if (i === 1 || i === 5 || i === 10 || i === 13 || i === 13) {
        formattedValue += "-";
      }
      formattedValue += alphanumericOnly[i];
    }

    // Update the citizen state with the formatted value
    setCitizen(formattedValue);
  };

  const handleNationalityChange = (event) => {
    const value = event.target.value;
    setNationality(value);
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      const user = {
        firstName: firstName,
        lastName: lastName,
        gender: selectedGender,
        phone: phone,
        nationality: nationality,
        citizen: citizen,
        passaport: passaport,
        salary: salary,
      };
      addUser(user);
      setFirstName("");
      setLastName("");
      setPhone("");
      setSelectedGender(null);
      setNationality("");
      setCitizen("");
      setPassaport("");
      setSalary("");
    }
    setFirstName("");
    setLastName("");
    setPhone("");
    setSelectedGender(null);
    setNationality("");
    setCitizen("");
    setPassaport("");
    setSalary("");
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
    handleReset,
    citizen,
    setCitizen,
    handleCitizenChange,
    passaport,
    setPassaport,
    handlePassaportChange,
    salary,
    setSalary,
    handleSalaryChange,
  };

  return (
    <PasContext.Provider value={data}>{props.children}</PasContext.Provider>
  );
}

export { PasProvider, PasContext, useContext };
