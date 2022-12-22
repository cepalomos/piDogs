import React from 'react'

function Filter({name,text}) {
  return (
    <div>
        <label htmlFor={name}>{text}</label>
        <input type="text" id={name} name={name}/>
        <button>Filtrar</button>
    </div>
  )
}

export default Filter