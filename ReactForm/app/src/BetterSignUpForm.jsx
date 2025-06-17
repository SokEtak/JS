// Working with mutiple input
import { useState } from "react";

function BetterSignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    // console.log(changedField);
    // console.log(newValue);
    setFormData((currentData) => {
      //this approch is not recommended
      //   currentData[changedField] = newValue;
      //   return { ...currentData };
      //This is the cleaner, more modern approach.
      return { ...currentData, [changedField]: newValue };
    });
  };
  const handleSubmit = () => {
    console.log("Submitted");
    console.log(formData);
  };
  return (
    <>
      <label htmlFor="firstName">FirstName:</label>
      <input
        name="firstName"
        id="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastName">LastName:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="password">password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default BetterSignUpForm;
