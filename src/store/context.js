import React, { createContext, useContext, useState } from "react";

const PasContext = createContext();

export default function PasProvider(props) {
  const [selectedGender, setSelectedGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("Afghanistan");
  const [birthday, setBirthday] = useState("");
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("Mr");
  const [citizen, setCitizen] = useState("");
  const [passaport, setPassaport] = useState("");
  const [salary, setSalary] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleSalaryChange = (event) => {
    const value = event.target.value;
    setSalary(value);
  };

  const handlePassaportChange = (event) => {
    setPassaport(event.target.value);
  };

  const handleCitizenChange = (event) => {
    let value = event.target.value;
    // Remove any non-alphanumeric characters
    value = value.replace(/[^a-zA-Z0-9]/g, "");
    // Restrict the value to a maximum of 15 characters
    value = value.slice(0, 13);
    // Format the value as X-XXXX-XXXXX-XX-X
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i === 1 || i === 5 || i === 10 || i === 12 || i === 13) {
        formattedValue += "-";
      }
      formattedValue += value[i];
    }
    setCitizen(formattedValue);
  };

  const handleBirthdayChange = (event) => {
    const value = event.target.value;
    setBirthday(value);
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

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === "" ||
      birthday === ""
    ) {
      setSubmitted(true);
      return;
    }

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
  };

  // const formatNumber = (value) => {
  //   if (value === "") {
  //     return "";
  //   }
  //   const number = parseFloat(value.replace(/[^0-9.]/g, ""));
  //   if (isNaN(number)) {
  //     return "";
  //   }
  //   return number.toLocaleString("en-US", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });
  // };

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
    handleBirthdayChange,
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
    submitted,
    setSubmitted,
    birthday,
    setBirthday,
  };

  return (
    <PasContext.Provider value={data}>{props.children}</PasContext.Provider>
  );
}

export { PasProvider, PasContext, useContext };
