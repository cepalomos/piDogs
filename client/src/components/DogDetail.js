import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DogDetail() {
  const [dog, setDog] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    return ((id) => {
      fetch(`http://localhost:3001/dogs/${id}`)
        .then((dog) => dog.json())
        .then((dog) => setDog(dog))
        .catch((error) => setDog(error));
    })(id);
  }, []);
  if (dog) {
    return (
      <div>
        <h1 className="contenedor_principal">{dog.name}</h1>
        <div className="contenedor_secundario">
          <div className="contenedor_imagen">
            <img
              src={
                dog.backgroudImage
                  ? dog.backgroudImage
                  : "https://media.istockphoto.com/id/1160720703/es/vector/icono-de-l%C3%ADnea-plana-de-perro-sentado-vector-delgado-signo-de-cachorro-negro-logotipo-animal.jpg?s=612x612&w=is&k=20&c=j3iJBxTK5l7Rs7Br5TxCuccKXwQEoxhUZf97r059r2s="
              }
              alt={`imagen de raza ${dog.name}`}
            />
          </div>
          <div className="contenedor_datos">
            <h3>{`This race lives ${dog.life_span}`}</h3>
            <h3>{`This breed measures ${dog.height} cms`}</h3>
            <h3>{`This breed weighs ${dog.weight} kgs`}</h3>
            <h3>{`The temperaments of this breed are ${dog.temperament}`}</h3>
          </div>
        </div>
        <Link to={"/home"}><button>Home</button></Link>
      </div>
    );
  } else {
    return <div>Espera
    <Link to={"/home"}><button>Home</button></Link>
    </div>;
    
  }
}

export default DogDetail;
