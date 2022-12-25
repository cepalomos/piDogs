import React from "react";
import Filter from "./Filter";
import Select from "./Select";

function Navigator({filterTemper,filterDogName}) {
  return (
    <div>
      <Filter name="Tempers" text="Ingresa las iniciales de la raza" func={filterDogName}/>
      <Filter name="DogName" text="Ingresa iniciales del temperamento" func={filterTemper}/>
      <Select
        name="prueba"
        options={[
          { name: "prueba1", id: 1,text:"prueba 1" },
          { name: "prueba2", id: 2,text:"prueba 2" },
        ]}
      />
    </div>
  )
}

export default Navigator;
