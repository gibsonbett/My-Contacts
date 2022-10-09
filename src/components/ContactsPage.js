import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
function ContactsPage({contacts, search, setContacts, setSearch}) {

  return (
    <div>
<ContactList 
  contacts={contacts} 
  search={search} 
  setContacts={setContacts} 
  setSearch={setSearch}
  />
    </div>
  )
}
export default ContactsPage;
