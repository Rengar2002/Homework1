import React from 'react'
import "./happyday.css"
import youtube from "./image/happyday.jpg";

const Happyday = () => {
  return (
    <div className='happyday'>
      <div className='list1'>
      <div className='list2'>
        <div>
        <img src={youtube} alt="youtube"/>
        </div>
        <div>
        <p>18 Января 2023</p>
        <p>Кисловодск, ул. Широкая 35</p>
        </div>
      </div>
      <div className='list3'>
        <p>День рождения у ФИО. 18 января в 15:30 в кафе `Снежинка`.</p>
        <p>Необходимо подарить ...</p>
      </div>
      </div>
    </div>
  )
}

export {Happyday}