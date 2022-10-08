import react from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Search from './Search';
import ContactsPage from './ContactsPage';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {

  return <div className=''>
    <NavBar/>
      <Switch>
        <Route exact path="/contacts">
          <ContactsPage />
        </Route>
        <Route exact path="/addcontact">
          <AddContact/>
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </div>
  
}

export default App;
