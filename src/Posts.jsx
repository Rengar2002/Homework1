import React from 'react'
import "./Posts.css"

const Posts = (props) => {
  
  function Opensss(){
    if(props.name ==="ДР")
    {
      window.open("http://localhost:3000/happyday","_self");
    }
    else if(props.name ==="Свадьба")
    {
      window.open("http://localhost:3000/svadba","_self");
    }
    else if(props.name ==="Сходка интровертов")
    {
      window.open("http://localhost:3000/events1","_self");
    }
    else if(props.name ==="Праздник")
    {
      window.open("http://localhost:3000/events2","_self");
    }
    else if(props.name ==="Спячка")
    {
      window.open("http://localhost:3000/events3","_self");
    }

  }
  return (
    <div className='Postshead'>
      <div>
      <p>{props.keys} {props.value}</p>
      </div>
      <div>
      <p>{props.name}</p>
      <p>{props.description}</p>
      </div>

      <button onClick={Opensss}>Подробнее</button>
    </div>
  )
}

export default Posts