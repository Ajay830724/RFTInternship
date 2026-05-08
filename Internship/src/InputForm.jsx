import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function InputForm({changeData}){
    let [newData, setNewData]=useState("");

    let handlerChange= (event)=>{
        setNewData(event.target.value);
    }
    let submitHandler= (event)=>{
        event.preventDefault();
        changeData({item:newData, key:uuidv4()});
        setNewData('');
    }
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Enter Your todo.." value={newData} onChange={handlerChange}/>
                <br /><br />
                <button onClick={submitHandler}>Add</button>
            </form >
        </div>
    )
}