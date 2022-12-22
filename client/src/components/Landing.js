import React from 'react'
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div>
        <img src='https://biotechmagazineandnews.com/wp-content/uploads/2019/10/perros.jpg' alt='imagen de perros'/>
        <Link to={"/home"}>
        <button className='button'>Entrar</button>
        </Link>
    </div>
  )
}

export default Landing