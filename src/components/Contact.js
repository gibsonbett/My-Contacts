import React from "react";

function Contact({ firstname, lastname, phone, email}) {
  console.log(firstname)
  return (
  <div style={{border: '1px solid blue'}}>
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  </div>

  );
}

export default Contact;
