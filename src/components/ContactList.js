import React from "react";
import Contact from "./Contact";

function ContactList({ contacts, search }) {
const filterData=contacts.filter((everyContact)=>
    everyContact.firstname.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div style={{border: '1px solid red'}}>
      All contacts
      {filterData.map((contact) => (
        <Contact
          key={contact.id}
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
