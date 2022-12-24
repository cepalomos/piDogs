import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "./Error";

function Main({ loading, error, dogs }) {
  return (
    <div>
      {loading && <Loading />}
      {!loading && error.length === 0 && dogs.length !== 0 && (
        <ul className="main_principal">
          {dogs.map(({ id, name, weight, temperament, backgroudImage }) => (
            <Link key={id} to={`/dog/${id}`}>
              <li>
                <Card
                  titulo={name}
                  url={backgroudImage}
                  tempersApi={temperament}
                  weight={weight}
                />
              </li>
            </Link>
          ))}
        </ul>
      )}
      {!loading && error.length > 0 && <Error className="home_error" />}
    </div>
  );
}

export default Main;
