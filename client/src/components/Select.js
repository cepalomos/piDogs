import React from "react";
import '../css/Select.css';

function Select({ name: nameProp, options, func, text }) {
  const name = nameProp ?? "Default";
  let option = [];
  if (options) {
    option = options.map(({ name, id, text }) => (
      <option value={name} key={id}>
        {text}
      </option>
    ));
  } else {
    option = [
      <option value={name} key={1}>
        No hay opciones
      </option>,
    ];
  }
  return (
    <div className="select_contenedor">
      <select
      className="select_items"
        name={name}
        onChange={({ target: { value } }) => {
          func(value);
        }}
      >
        <option>{text}</option>
        {option}
      </select>
    </div>
  );
}

export default Select;
