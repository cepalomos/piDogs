import React from "react";
import Filter from "./Filter";
import Select from "./Select";

function Navigator() {
  return (
    <div>
      <Filter name="Dogs" text="Ingresa las iniciales de la raza" />
      <Select
        name="prueba"
        options={[
          { name: "prueba1", id: 1,text:"prueba 1" },
          { name: "prueba2", id: 2,text:"prueba 2" },
        ]}
      />
    </div>
  );
}

export default Navigator;
