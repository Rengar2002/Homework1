import React from 'react'
import "./happyday.css"
import photo from "./image/svadba.jpg";

const Svadba = () => {
  return (
    <div className='happyday'>
      <div className='list1'>
      <div className='list2'>
        <div>
        <img src={photo} alt="youtube"/>
        </div>
        <div>
        <p>18 Февраль 2022</p>
        <p>Пятигорск</p>
        </div>
      </div>
      <div className='list3'>
        <p>Свадьба у ФИО. Нужно 19 февраля в 12:00 быть по Адресу `ул.Коммунальная 5, 36 квартира`</p>
        <p>Необходимо подарить ...</p>
      </div>
      </div>
    </div>
  )
}

export {Svadba}