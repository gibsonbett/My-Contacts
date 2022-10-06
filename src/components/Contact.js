import React from "react";

function Contact({ firstname, lastname, phone, email}) {
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}

export default Contact;
