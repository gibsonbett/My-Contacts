import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import Search from "./Search";
import AddContact from "./AddContact";
function ContactsPage() {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [addedContact, setAddedContact] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((data) => {setContacts(data)});
  }, [addedContact]);
     
  function handleNewContact(){
    setAddedContact((addedContact)=>!addedContact)
  }
  // console.log(contacts);

  return (
    <div className="contactList">
      <div>
        <Search 
        setSearch = {setSearch}
        />
        <AddContact setAddedContact = {handleNewContact}/>
      </div>
      <ContactList 
      
      search= {search}
      contacts={contacts} 
      setContacts={setContacts} />
    </div>
  );
}
export default ContactsPage;
