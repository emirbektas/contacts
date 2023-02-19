import React, { useState } from "react";

function List({ contacts }) {
  const [filter, setFilter] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <br />
      <input
        placeholder="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            {contact.name} {contact.surname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
