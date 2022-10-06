import React from "react";
import Contact from "./Contact";


function ContactList({contacts, setContacts}){
console.log (contacts)


    return(
        <div>
               All contacts
            {contacts.map((contact) => (
                <Contact 
                key = {contact.id}
                firstname = {contact.firstname} 
                lastname = {contact.lastname} 
                phone = {contact.phone} 
                email = {contact.email} 
                />
            ))}
        </div>
    )
}
export default ContactList