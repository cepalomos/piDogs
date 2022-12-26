import React, { useEffect, useState } from "react";
import Main from "./Main";
import Navigator from "./Navigator";
import { useSelector, useDispatch } from "react-redux";
import {
  peticionDog,
  filterTempers,
  filterDogName,
  resetDogs,
  ALPHABETIC_ASC,
  ALPHABETIC_DES,
  orderAlphabetic,
  WEIGHT_ASC,
  WEIGHT_DES
} from "../redux/actions/dog";
import Pagination from "./Pagination";

function Home() {
  const optionsAlf = [
    { id: 1, name: ALPHABETIC_ASC, text: "Asendente" },
    { id: 2, name: ALPHABETIC_DES, text: "Desendente" },
  ];
  const optionsWeight = [{id:1,name:WEIGHT_ASC,text:"Asendente"},{id:2,name:WEIGHT_DES,text:"Desendente"}];
  const { loading, dog, error } = useSelector((state) => state);
  const [dogs, setDogs] = useState([]);
  const [pag, setPag] = useState(1);
  const [numPag, setNumPag] = useState([0, [1]]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(peticionDog("http://localhost:3001/dogs"));
  }, []);
  useEffect(() => {
    return ((array, pag) => {
      let pagination = [];
      const numberPages = Math.ceil(array.length / 8);
      for (let i = 1; i <= numberPages; i++) {
        pagination.push(i);
      }
      setNumPag([numberPages, pagination]);
      let newArray = array.slice((pag - 1) * 8, (pag - 1) * 8 + 8);
      setDogs(newArray);
    })(dog, pag);
  }, [dog, pag]);
  // function changePage(e,page){
  //   e.preventDefault();
  //   console.log(page);
  //   if(page<=numPag[1]){
  //     setPag(page);
  //   }
  // };
  function dogName(nameDog) {
    dispatch(filterDogName(nameDog));
  }
  function temper(temperament) {
    dispatch(filterTempers(temperament));
  }
  function resetFiltros() {
    dispatch(resetDogs());
  }
  function orderGeneral(ordenamiento) {
    dispatch(orderAlphabetic(ordenamiento));
  }
  return (
    <div>
      <Navigator
        filterTemper={temper}
        filterDogName={dogName}
        reset={resetFiltros}
        alphabetic={orderGeneral}
        optionsAlf={optionsAlf}
        textAlf="---Ordenamiento alfabetico---"
        textWeight="---Ordenamiento por peso---"
        optionsWeight={optionsWeight}
      />
      <Main loading={loading} dogs={dogs} error={error} />
      <Pagination pages={numPag} funcPage={setPag} />
    </div>
  );
}

export default Home;
