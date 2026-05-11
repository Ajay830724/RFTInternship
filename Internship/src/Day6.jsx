import InputForm from "./InputForm";
import ToDoList from "./ToDoList";
import { useState } from "react";
export default function Day6(){
    let [data, setData]= useState([]);

    let changeData= (newData)=>{
        setData((prev)=>{
            return [...prev, newData];
        }) ;
        console.log(data);
    }
    let delData= (newData)=>{
        setData(newData);
    }
    return (
        <div>
            <InputForm changeData={changeData}></InputForm>
            <ToDoList data={data} delData={delData}></ToDoList>
        </div>
    )
}