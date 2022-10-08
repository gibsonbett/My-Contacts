import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function AddContact(addedContact, handleNewContact) {
  const history = useHistory();
  const [newContact, setNewContact] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {

    const name = e.target.name;
    console.log(e.target.name);
    let value = e.target.value;
    setNewContact({ ...newContact, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((data) => (data));
    handleNewContact();
    history.push("/");
  }

  if (!addedContact) return <Redirect to="/ContactsPage" />;
  return (
    <>
      <div className="input_items">
        <form onSubmit={handleSubmit} className="contacts">
          <label>
            First Name :{" "}
            <br/>
            <input
              onChange={handleChange}
              className="formInput"
              type="text"
              placeholder="Enter first name"
              name="firstname"
            />
          </label>
          <label>
            Second Name :{" "}
            <input
              onChange={handleChange}
              className="formInput"
              type="text"
              placeholder="Enter last name"
              name="lastname"
            />
          </label>
          <label>
            Phone :{" "}
            <input
              onChange={handleChange}
              className="formInput"
              type="text"
              placeholder="Enter phone number"
              name="phone"
            />
          </label>
          <label>
            Email :{" "}
            <input
              onChange={handleChange}
              className="formInput"
              type="text"
              placeholder="Enter email"
              name="email"
            />
          </label>
          <input
            id="addbtn"
            type="submit"
            value="Add to Contacts"
          />
        </form>
      </div>
    </>
  );
}

export default AddContact;
