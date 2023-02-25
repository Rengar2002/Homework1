import React,{useState} from 'react';
import "./Select.css";



const Select = (props) => {



    const [year,setyear] = useState("2023");
    const [month,setmonth] = useState("Январь");
    const [date,setDate] = useState({year:"2023",month:"Январь"});

    const handler =()=>{
        setDate({year:year,month:month})
        props.onClick(year,month);
      }

    const inhandler=()=>{
      setDate({year:null,month:null});
    }
    

  return (
    <div className='bodyselect'>
        <div>
          <p> Years
          <select onChange={(event)=>setyear(event.target.value)}>
          <option value={"2023"}>2023</option>
          <option value={"2022"}>2022</option>
          <option value={"2021"}>2021</option>
          <option value={"2020"}>2020</option>
          <option value={"2019"}>2019</option>
        </select>
        </p>
        </div>
        <div>
        <p> Month
        <select onChange={(event)=>setmonth(event.target.value)}>
          <option value="Январь">Январь</option>
          <option value="Февраль">Февраль</option>
          <option value="Март">Март</option>
          <option value="Апрель">Апрель</option>
          <option value="Май">Май</option>
          <option value="Июнь">Июнь</option>
          <option value="Июль">Июль</option>
          <option value="Август">Август</option>
          <option value="Сентяберь">Сентяберь</option>
          <option value="Октяберь">Октяберь</option>
          <option value="Нояберь">Нояберь</option>
          <option value="Декаберь">Декаберь</option>
        </select>
        </p>
        </div>
        <button onClick={handler}>Принять</button>
        <button onClick={props.inhandler}>Очистить</button>
    </div>
  )
}

export default Select