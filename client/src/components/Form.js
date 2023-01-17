import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function Form() {
  const [data, setData] = useState({});
  const [temperamento, setTemperamento] = useState([]);
  const [temperApi, setTemperApi] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch('http://localhost:3001/temperaments').then(res => res.json());
      setTemperApi(data);
    })()
  }, [])
  return (
    <div>
      <form>
        <h1>Crear raza de perro</h1>
        <label htmlFor='nombre'>Nombre de raza</label>
        <input type={'text'} id='nombre' onChange={({ target: { value } }) => setData({ ...data, nombre: value })} value={data.nombre}></input>
        <fieldset><legend>Altura</legend>
          <label htmlFor='altura-min'>Altura Minima</label>
          <input type={'number'} id="altura-min" onChange={({ target: { value } }) => setData({ ...data, alturaMin: value })} value={data.alturaMin}></input>
          <label htmlFor='altura-max'>Altura Maxima</label>
          <input type={'number'} id='altura-max' onChange={({ target: { value } }) => setData({ ...data, alturaMax: value })} value={data.alturaMax}></input></fieldset>
        <fieldset><legend>Peso</legend>
          <label htmlFor='peso-min'>Peso Minimo</label>
          <input type={'number'} id='peso-min' onChange={({ target: { value } }) => setData({ ...data, pesoMin: value })} value={data.pesoMin}></input>
          <label htmlFor='peso-max'>Peso Maximo</label>
          <input type={'number'} id='peso-max' onChange={({ target: { value } }) => setData({ ...data, pesoMax: value })} value={data.pesoMax}></input></fieldset>
        <fieldset><legend>Años de vida</legend>
          <label htmlFor='ano-min'>Años Minimo de Vida</label>
          <input type={'number'} id="ano-min" onChange={({ target: { value } }) => setData({ ...data, anoMin: value })} value={data.anoMin}></input>
          <label htmlFor='ano-max'>Años Maximo de Vida</label>
          <input type={'number'} id="ano-max" onChange={({ target: { value } }) => setData({ ...data, anoMax: value })} value={data.anoMax}></input>
        </fieldset>
        <fieldset>
          <legend>Temperamento</legend>
          <label htmlFor='temper'>Escoge los temperamentos de la raza</label>
          <input list='temperamentos' id='temper' name='temperamento' onClick={({ target: { value } }) => {
            if (!temperamento.includes(value) && value !== "") {
              setTemperamento([...temperamento, value]);
            }
          }}></input>
          <datalist id='temperamentos'>
            {temperApi ? temperApi.map(({ id, name }) => <option value={name} key={id}></option>) : <option value={"Esperando datos"}></option>}
          </datalist>
          <div>
            <ul>
              {temperamento ? temperamento.map(name => <li key={name}>{name}<button onClick={(e) => {
                e.preventDefault();
                setTemperamento(temperamento.filter((nameTemper) => {
                  if (name !== nameTemper) {
                    return nameTemper
                  }
                }))
              }}>X</button></li>) : <li>Esperando temperamentos</li>}
            </ul>
          </div>
        </fieldset>
        <button onClick={async(e) => {
          e.preventDefault();
          const {nombre,alturaMax,alturaMin,pesoMax,pesoMin,anoMax,anoMin} = data;
          const dog = {name:nombre,height:`${alturaMin}-${alturaMax}`,weight:`${pesoMin}-${pesoMax}`,life_span:`${anoMin}-${anoMax}`,tempers:temperamento.map(nameTemper=>{
            const aux = temperApi.find(({name})=>name === nameTemper);
            return aux.id;
          })}
          const response =await fetch("http://localhost:3001/dogs", {
            method: 'POST',
            body: JSON.stringify(dog),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response);
        }}>Enviar</button>
        <NavLink to={'/home'}><button>Cancelar</button></NavLink>
      </form>
    </div>
  )
}

export default Form