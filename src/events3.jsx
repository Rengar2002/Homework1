import React from 'react'
import "./happyday.css"
import photo from "./image/events3.png";

const Events3 = () => {
  return (
    <div className='happyday'>
      <div className='list1'>
      <div className='list2'>
        <div>
        <img src={photo} alt="youtube"/>
        </div>
        <div>
        <p>12 Декаберь 2019</p>
        <p>Дома</p>
        </div>
      </div>
      <div className='list3'>
        <p>C 12 декабря до 18 декабря побывать в спячке.</p>
        <p>После чего сдать экзамен и готовится к Новому Году.</p>
      </div>
      </div>
    </div>
  )
}

export {Events3}