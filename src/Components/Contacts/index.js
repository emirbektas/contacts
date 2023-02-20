import React, { useEffect, useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1 style={{ color: "white" }}>Contacts</h1>
      <Form addContact={setContacts} contacts={contacts} />
      <List contacts={contacts} />{" "}
    </div>
  );
}

export default Contacts;
