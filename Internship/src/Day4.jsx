import {useState} from 'react';
export default function Day4(){
    let [msg,setMsg]=useState({user:"",email:""});
    let [user,setUser]=useState("");
    let [email,setEmail]=useState("");

    let handlerChangeUser= (event)=>{
        setUser(event.target.value);
    }
    let handlerChangeEmail= (event)=>{
        setEmail(event.target.value)
    }
    let handlerSubmit= (event)=>{
        event.preventDefault();
        setMsg(()=>{
            return {user:user,email:email};
        });
        setUser("");
        setEmail("");
        // setMsg({user:"",email:""})
    }
    return (
        <div>           
            <form onSubmit={handlerSubmit}>
                <label htmlFor="" placeholder="Enter User" >UserName: </label>
                <input type="text" value={user} name={"user"} onChange={handlerChangeUser}/> <br /><br />

                <label htmlFor="" placeholder="Enter User" >Email: </label>
                <input type="text" value={email} name={"email"} onChange={handlerChangeEmail}/> <br /><br />
                <button>Submit</button>
            </form>
            <h3>Output: </h3>
            {(msg.user==="" || msg.email==="") ?
                <p>No,Data</p> :
                <div>
                    <p>User: {msg.user}</p>
                    <p>Email: {msg.email}</p>
                </div> 
            }
        </div>
    )
}