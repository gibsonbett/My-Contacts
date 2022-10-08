import React from "react";

function Contact({ firstname, lastname, phone, email, id, deleteContact }) {
  console.log(firstname);
  return (
    <div className="contact">
      <th>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <hr />
      </th>
      <div id="delete">
          <button id="btn" onClick={() => deleteContact(id)}>
            delete
          </button>
        </div>
    </div>
  );
}

export default Contact;
