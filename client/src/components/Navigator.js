import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Select from "./Select";
import '../css/Navigator.css';

function Navigator({ filterTemper, filterDogName, reset, alphabetic, optionsAlf, textAlf, optionsWeight, textWeight }) {
  return (
    <div className="contenedor_navigator">
      <Filter
        name="Tempers"
        text="Ingresa las iniciales de la raza"
        func={filterDogName}
      />
      <Filter
        name="DogName"
        text="Ingresa iniciales del temperamento"
        func={filterTemper}
      />
      <button
        className="navigator_buttom"
        onClick={(e) => {
          e.preventDefault();
          reset();
        }}
      >
        RESET FILTROS
      </button>
      <Select
        name="orderAlphabetic"
        options={optionsAlf}
        func={alphabetic}
        text={textAlf}
      />
      <Select
        name="orderWeight"
        options={optionsWeight}
        func={alphabetic}
        text={textWeight}
      />

      <Link to={"/create"}><button className="navigator_buttom">
        Crear Raza
      </button></Link>
    </div>
  );
}

export default Navigator;
