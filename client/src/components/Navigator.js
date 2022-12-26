import React from "react";
import Filter from "./Filter";
import Select from "./Select";

function Navigator({ filterTemper, filterDogName, reset, alphabetic,optionsAlf,textAlf,optionsWeight,textWeight }) {
  return (
    <div>
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
      <button
        onClick={(e) => {
          e.preventDefault();
          reset();
        }}
      >
        RESET FILTROS
      </button>
    </div>
  );
}

export default Navigator;
