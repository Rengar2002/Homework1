import React from 'react'
import "./happyday.css"
import photo from "./image/events2.jpg";

const Events2 = () => {
  return (
    <div className='happyday'>
      <div className='list1'>
      <div className='list2'>
        <div>
        <img src={photo} alt="youtube"/>
        </div>
        <div>
        <p>16 Август 2020</p>
        <p>Суворовка, проспект Широкий 23</p>
        </div>
      </div>
      <div className='list3'>
        <p>Традиция. 18 Августа необходимо поехать в Суворовку  и пожать руку Вити.</p>
        <p>В 9 утра поехать в Ессентуки, после чего сесть на маршутку и поехать к Вите.</p>
      </div>
      </div>
    </div>
  )
}

export {Events2}