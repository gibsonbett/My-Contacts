import React from "react";
import Contact from "./Contact";

function ContactList({ contacts, search, setContacts, setSearch }) {
  console.log(contacts)
  const filterData = contacts.filter((everyContact) =>
    everyContact.firstname.toLowerCase().includes(search.toLowerCase())
  );

  function deleteContact(id) {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedContacts = contacts.filter(
          (remainingContacts) => remainingContacts.id !== id
        );
        setContacts(updatedContacts);
      });
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="contactlist">
      ALL CONTACTS
      <input id="search" type="text" placeholder="Search Contact" onChange={handleSearch} />
      <i className=""></i>
      
      {filterData.map((contact) => (
        <Contact
          deleteContact={deleteContact}
          id={contact.id}
          firstname={contact.firstname}
          lastname={contact.lastname}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}
export default ContactList;
