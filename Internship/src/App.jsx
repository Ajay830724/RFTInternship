import './App.css'
import Day1 from './Day1'
import Day2 from './Day2'
import Day3 from './Day3'
import Day4 from './Day4'
import Day6 from './Day6'
import { useState } from "react";
function App() {
  let [isChange , setChange]= useState(false);
  function handlerChange(){
    setChange(!isChange);
    console.log("handlerChange ", isChange);
  }
  return (
    <div style={isChange? {backgroundColor:"black",color:"white"}: {backgroundColor:"white",color:"black"}} >
      <Day3 handlerChange={handlerChange}/>
      {/* <Day2 isChange={isChange}/> */}
      {/* <Day4/> */}
       <Day6></Day6>
    </div>
  )
}

export default App;
