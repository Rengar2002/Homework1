import React from 'react'
import "./happyday.css"
import photo from "./image/events1.jpg";

const Events1 = () => {
  return (
    <div className='happyday'>
      <div className='list1'>
      <div className='list2'>
        <div>
        <img src={photo} alt="youtube"/>
        </div>
        <div>
        <p>16 Март 2021</p>
        <p>Дома</p>
        </div>
      </div>
      <div className='list3'>
        <p>Посидеть дома и подумать. Почему ты один и не можешь найти друзей и попасть в депресию</p>
        <p>Необходимо подарить... ничего, а хотя можно торт</p>
      </div>
      </div>
    </div>
  )
}

export {Events1}