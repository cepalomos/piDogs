import React, { useState } from "react";

function Filter({ name, text, func }) {
  const [textoInput, setTextoInput] = useState("");
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={({ target: { value } }) => setTextoInput(value)}
        value={textoInput}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if(textoInput)
          func(textoInput);
        }}
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
