import React from 'react'
import { Link } from "react-router-dom";
import '../css/Landing.css';

const Landing = () => {
  return (
    <div className='container_landing'>
        <img src='https://biotechmagazineandnews.com/wp-content/uploads/2019/10/perros.jpg' alt='imagen de perros' className='imagen_landing'/>
        <Link to={"/home"}>
        <button className='button_landing'>Entrar</button>
        </Link>
    </div>
  )
}

export default Landing