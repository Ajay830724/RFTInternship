export default function ToDoList({data , delData}){
    let isDo=false;
    let handlerDelete= (key)=>{
        let updata= data.filter((obj)=>{
            return obj.key!==key;
        })
        delData(updata);
    }
    let handlerDeleteAll= ()=>{
        delData([]);
    }
    return(
        <div>
            <h3>Your ToDo: </h3>
            <ul>
                {data.map((obj)=>{
                    return  <li key={obj.key}>
                                <input type="checkbox" />
                                {obj.item} &nbsp; 
                                <button onClick={()=>handlerDelete(obj.key)}>Delete</button>
                            </li> // because we cann't call directly to fun , for this we need to help for an function
                })}
            </ul>
            <button onClick={handlerDeleteAll}>DeleteAll</button>
        </div>
    )
}