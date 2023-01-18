import React, { useState } from "react";
import '../css/Filter.css';

function Filter({ name, text, func }) {
  const [textoInput, setTextoInput] = useState("");
  return (
    <div className='navigator_filter'>
      <label htmlFor={name} className='navigator_label'>{text}</label>
      <input
        className="navigator_input"
        type="text"
        id={name}
        name={name}
        onChange={({ target: { value } }) => setTextoInput(value)}
        value={textoInput}
      />
      <button
      className="button_filter"
        onClick={(e) => {
          e.preventDefault();
          if (textoInput)
            func(textoInput);
            setTextoInput("");
        }}
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
