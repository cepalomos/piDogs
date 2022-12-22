import React from "react";

function Select({ name: nameProp, options }) {
    const name = nameProp??"Default";
  let option =[];
  if (options) {
    option = options.map(({ name, id,text }) => (
      <option value={name} key={id}>
        {text}
      </option>
    ));
  } else {
    option = [<option value={name} key={1}>No hay opciones</option>];
  }
  return (
    <div>
      <select name={name}>{option}</select>
      <button>Filtrar</button>
    </div>
  );
}

export default Select;
