import React from 'react'
import Card from './Card'

function Main() {
  return (
    <div>
       <Card titulo="Prueba" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b7YPt8KUjVmIagSWQ2Ch0rMaHI_SmbrVh66kRWx9&s" tempersApi={["bravo","manso"]} weight="23 kg" key={1}/>
    </div>
  )
}

export default Main