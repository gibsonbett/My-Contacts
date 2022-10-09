import React from "react";

function Contact({ firstname, lastname, phone, email, id, deleteContact }) {
  console.log(firstname);

  return (
    <div className="contact">
      <tr>
        <td className="contact_item">Name:<br/> {firstname} {lastname}</td>
        {/* <td className="contact_item">{lastname}</td> */}
        <td className="contact_item">Mobile:<br/>  {phone}</td>
        <td className="contact_item">Email:<br/>  {email}</td>
        <hr />
      </tr>
      <div id="delete">
        <button id="btn" onClick={() => deleteContact(id)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
