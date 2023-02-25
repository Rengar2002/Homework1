import React from 'react'
import { useState } from 'react';




const questions = [
{
  title:"React - это...",
  variants:['библиотека','фреймворк','приложение'],
  true:0
},
{
  title:"React - это...",
  variants:['фреймворк','библиотека','приложение'],
  true:1
},
{
  title:"React - это...",
  variants:['приложение','фреймворк','библиотека'],
  true:2
}
];

function Result({correct,question}){
  return(
  <div>
    <h1>Вы отгадали {correct} из {questions.length}</h1>
    <a href="/test"><button>попробывать снова</button></a>
  </div>
  )
}

function Game({question,onClickVariants}){
  return(
    <>
    <p>{question.title}</p>
    <ul>
      {question.variants.map((text,index)=>(
        <li key={index}><button onClick={()=>onClickVariants(index)}>{text}</button></li>
      ))}
    </ul>
    </>
    )
}





const Test = () => {
  
  const[step,setStep]= useState(0);
  const [correct,setCorrect] = useState(0);
  const question= questions[step];

  const onClickVariants =(index)=>{
    setStep(step+1)

    if(question.true===index)
    {
      setCorrect(correct+1)
    }
  }

  return (
    <div>
     {
      step !== questions.length?<Game question={question} onClickVariants={onClickVariants}></Game>
      :<Result correct={correct} question={question}/>
     }
    </div>
  )
}

export {Test}