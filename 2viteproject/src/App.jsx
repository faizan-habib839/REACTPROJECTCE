
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  
  const addvalue=()=>{
   
   
   if(count<=20)
   {
     setCount(count+1)
     console.log("value is added ",count+1)
     
   }
   else{
     console.log("value is not update")
   }
  

  }

  
 const removevalue=()=>{
  if(count>0){
    setCount(count-1)
  console.log("value is remove ",count-1)
  }
  else{
    console.log("value is not remove")
  }
 }
  return (
    <>
     <h1>second project in react js </h1>
     <h2>counter value : {count}</h2>
     <button onClick= {addvalue} disabled={count>=21}>add value{count}</button>
    <br />
    <br/>
    <button onClick={removevalue} disabled={count<=0}>remove value{count} </button>
    </>
  )
}

export default App
