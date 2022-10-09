import React from "react";

function Contact({ firstname, lastname, phone, email, id, deleteContact }) {
  console.log(firstname);

  return (
    <div className="contact">
      <tr>
        <td className="contact_item"><u style={{color: "#1C6758"}}>Name:</u><br/> {firstname} {lastname}</td>
        {/* <td className="contact_item">{lastname}</td> */}
        <td className="contact_item"><u style={{color: "#1C6758"}}>Mobile:</u><br/>  {phone}</td>
        <td className="contact_item"><u style={{color: "#1C6758"}}>Email:</u><br/>  {email}</td>
        <hr />
      </tr>
      <div id="delete">
        <button id="deletebtn" onClick={() => deleteContact(id)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
