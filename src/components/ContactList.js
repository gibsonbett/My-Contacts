import React from "react";

function ContactList(){
// fetch contacts from json
return(
    <div>
        <ul>
            <li>
                {/* {fetched contacts go here} */}
                <AddContact/>
            </li>
        </ul>
    </div>
)
}
export default ContactList