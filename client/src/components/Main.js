import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { peticionDog } from "../redux/actions/dog";
import Loading from "../components/Loading";

function Main() {
  const { loading, dogApi, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(peticionDog("http://localhost:3001/dogs"));
  }, []);
  return (
    <div>
      {/* <Card titulo="Prueba" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b7YPt8KUjVmIagSWQ2Ch0rMaHI_SmbrVh66kRWx9&s" tempersApi={["bravo","manso"]} weight="23 kg" key={1}/> */}
      {loading && <Loading />};
      {!loading && error.length === 0 && dogApi.length !== 0 && (
        <ul className="main_principal">
          {dogApi.map(({ id, name, weight, temperament, backgroudImage }) => (
            <li key={id}>
              <Card
                titulo={name}
                url={backgroudImage}
                tempersApi={temperament}
                weight={weight}
              />
            </li>
          ))}
          ;
        </ul>
      )}
    </div>
  );
}

export default Main;
