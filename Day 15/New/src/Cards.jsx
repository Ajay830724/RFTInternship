import {useState} from 'react';
import Card from './Card';

export default function Cards(){
    let [user, setUsers]= useState([{name:"Ajay Kumar", email:"ak9428647@gmail.com",img:"https://randomuser.me/api/portraits/med/men/29.jpg"}]);
    let handlerCard= async ()=>{
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const newData= {name:data.results[0].name.first, email:data.results[0].email, img:data.results[0].picture.large}
        // console.dir(newData);
        setUsers([...user, newData]);
        }
    return (
        <div>
            <h2>Cards: </h2>  
            <button onClick={handlerCard}>Create User</button>
            {user.map((data, index)=>{ 
                return  <Card key={index} data={data}></Card>
            } 
             )}
            
        </div>
    )
}