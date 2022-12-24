import React,{ useEffect, useState }  from 'react';
import Main from './Main';
import Navigator from './Navigator';
import { useSelector, useDispatch } from "react-redux";
import { peticionDog } from "../redux/actions/dog";
import Pagination from './Pagination';

function Home() {
  const { loading, dogApi, error } = useSelector((state) => state);
  const [dogs, setDogs] = useState([]);
  const [pag, setPag] = useState(1);
  const [numPag, setNumPag] = useState([0,[1]]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(peticionDog("http://localhost:3001/dogs"));
  }, []);
  useEffect(()=>{
    return ((array,pag)=>{
      let pagination = [];
      const numberPages = Math.ceil(array.length/8);
      for(let i=1;i<=numberPages;i++){
        pagination.push(i);
      };
      setNumPag([numberPages,pagination]);
      let newArray = array.slice((pag-1)*8,(pag-1)*8+8);
      setDogs(newArray);
    })
    (dogApi,pag);
  },[dogApi,pag]);
  // function changePage(e,page){
  //   e.preventDefault();
  //   console.log(page);
  //   if(page<=numPag[1]){
  //     setPag(page);
  //   }
  // };

  return (
    <div>
    <Navigator/>
    <Main loading={loading} dogs={dogs} error={error}/>
    <Pagination pages={numPag} funcPage={setPag}/>
    </div>
  )
}

export default Home