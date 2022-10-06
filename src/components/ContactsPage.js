import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";

function ContactsPage() {
  // fetch contacts from json
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
       fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data))

  }, []);

  console.log(contacts)

  return (
    <div className="App">
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}
export default ContactsPage;
