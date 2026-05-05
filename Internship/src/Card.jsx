import "./Card.css"
export default function Card({data}){
    return (
        <div style={{display:"flex"}}>
            {data.map((d,idx)=>{
                return <div className="card">
                            <img src={d.img} alt="" />
                            <h3>{d.name}</h3>
                            <p> Age: {d.age}</p>
                            <button style={{backgroundColor: "#1877F2", color:"white"}}> +Follow</button>
                            {d.status==true ?<p style={{color:"green"}}>Onlie</p>:<p style={{color:"red"}}>Offline</p>}
                        </div>
            })}
        </div>
    )
}