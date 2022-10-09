import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ContactsPage from "./ContactsPage";
import AddContact from "./AddContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [newContact, setNewContact] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, [newContact]);
  function handleNewContact() {
    setNewContact((newContact) => newContact);
  }

  return (
    <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/addcontact">
          <AddContact handleNewContact={handleNewContact} />
        </Route>
        <Route exact path="/contacts">
          <ContactsPage
            contacts={contacts}
            search={search}
            setContacts={setContacts}
            setSearch={setSearch}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
