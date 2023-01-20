import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Form.css';

function Form() {
  const [data, setData] = useState({});
  const [temperamento, setTemperamento] = useState([]);
  const [selectTemper, setSelectTemper] = useState([])
  const [temperApi, setTemperApi] = useState([]);
  const letras = "ABCDEFGHIJKLMNOPQRSTUWXYZ".split('');
  useEffect(() => {
    (async () => {
      const data = await fetch('http://localhost:3001/temperaments').then(res => res.json());
      setTemperApi(data);
    })()
  }, [])
  return (
    <div className='form_principal'>
      <form className='form_contenedor'>
        <h1 className='form_titulo'>Crear raza de perro</h1>
        <fieldset className='form_fieldset_especial'>
        <legend className='form_legend'>Nombre</legend>
        <label htmlFor='nombre' className='form_label'>Nombre de raza</label>
        <input type={'text'} id='nombre' onChange={({ target: { value } }) => setData({ ...data, nombre: value })} value={data.nombre}></input>
        </fieldset>
        <fieldset className='form_fieldset'><legend className='form_legend'>Altura</legend>
          <label htmlFor='altura-min' className='form_label'>Altura Minima</label>
          <input type={'number'} id="altura-min" onChange={({ target: { value } }) => setData({ ...data, alturaMin: value })} value={data.alturaMin}></input>
          <label htmlFor='altura-max' className='form_label'>Altura Maxima</label>
          <input type={'number'} id='altura-max' onChange={({ target: { value } }) => setData({ ...data, alturaMax: value })} value={data.alturaMax}></input></fieldset>
        <fieldset className='form_fieldset'><legend className='form_legend'>Peso</legend>
          <label htmlFor='peso-min' className='form_label'>Peso Minimo</label>
          <input type={'number'} id='peso-min' onChange={({ target: { value } }) => setData({ ...data, pesoMin: value })} value={data.pesoMin}></input>
          <label htmlFor='peso-max' className='form_label'>Peso Maximo</label>
          <input type={'number'} id='peso-max' onChange={({ target: { value } }) => setData({ ...data, pesoMax: value })} value={data.pesoMax}></input></fieldset>
        <fieldset className='form_fieldset'><legend className='form_legend'>Años de vida</legend>
          <label htmlFor='ano-min' className='form_label'>Años Minimo de Vida</label>
          <input type={'number'} id="ano-min" onChange={({ target: { value } }) => setData({ ...data, anoMin: value })} value={data.anoMin}></input>
          <label htmlFor='ano-max' className='form_label'>Años Maximo de Vida</label>
          <input type={'number'} id="ano-max" onChange={({ target: { value } }) => setData({ ...data, anoMax: value })} value={data.anoMax}></input>
        </fieldset>
         <fieldset>
            <legend>Descripcion</legend>
            <input type={'text'} onChange={({target:{value}})=>{setData({...data,descripcion:value})} value={data.descripcion}/>
            </fieldset>
        <fieldset className='form_fieldset' id='form_temper'>
          <legend className='form_legend'>Temperamento</legend>
          <label htmlFor='temper' className='form_label'>Escoge los temperamentos de la raza</label>
          <select className='form_select'  onChange={({ target: { value } }) => {
            setSelectTemper(temperApi.filter(({ name, id }) => {
              if (name[0].toLocaleLowerCase() === value) {
                return ({ id, name });
              }
            }))
          }}>
            <option value={""}>--Selecciona la letra con la empieza el temperamento--</option>
            {letras.map(letra => (<option value={letra.toLocaleLowerCase()} key={letra}>{letra}</option>))}
          </select>
          <select className='form_select' id='centrar' name='temperamento' onChange={({ target: { value } }) => {
            if (!temperamento.includes(value) && value !== "") {
              setTemperamento([...temperamento, value]);
            }
          }}>
            <option key={0} value={""}>{selectTemper.length ? `Temperamentos con "${selectTemper[0].name[0]}"` : `No hay temperamentos`}</option>
            {selectTemper ? selectTemper.map(({ id, name }) => <option value={name} key={id}>{name}</option>) : <option value={"Esperando datos"}></option>}
          </select>
          <div className='form_caja_temperamento'>
            <ul>
              {temperamento ? temperamento.map(name => <li key={name} className='form_li'>{name}<button onClick={(e) => {
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
        <button className='form_button' onClick={async (e) => {
          e.preventDefault();
          const { nombre, alturaMax, alturaMin, pesoMax, pesoMin, anoMax, anoMin,descripcion } = data;
          const dog = {
            name: nombre, height: `${alturaMin}-${alturaMax}`, weight: `${pesoMin}-${pesoMax}`, life_span: `${anoMin}-${anoMax}`,descripcion, tempers: temperamento.map(nameTemper => {
              const aux = temperApi.find(({ name }) => name === nameTemper);
              return aux.id;
            })
          }
          console.log(dog);
          const response = await fetch("http://localhost:3001/dogs", {
            method: 'POST',
            body: JSON.stringify(dog),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response);
        }}>Enviar</button>
        <NavLink to={'/home'}><button className='form_button'>Cancelar</button></NavLink>
      </form>
    </div>
  )
}

export default Form
