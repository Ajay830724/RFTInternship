import { useState } from "react";
import './Day1.css';
export default function Day1(){
    let [count ,setCount]=useState(0);
    let incCount= ()=>{
        setCount(count+5);
    }
    let decCount= ()=>{
        count<=5 ? setCount(0): setCount(count-5);
    }
    let resetCount= ()=>{
        setCount(0);
    }
    return (
        <div className="container">
            <h3>Number Counter </h3>
            <p>Count= {count}</p>     
            <button onClick={incCount}>Increment</button> &nbsp;
            <button onClick={decCount}>Decrement</button> &nbsp;
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}