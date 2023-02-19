import React, { useState } from "react";

const initialFormValues = { name: "", surname: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.name === "" || form.surname === "") {
      alert("Name or phone number empty!");
      return false;
    }
    addContact([...contacts, form]);
    setForm(initialFormValues);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="surname"
          value={form.surname}
          placeholder="Surname"
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
