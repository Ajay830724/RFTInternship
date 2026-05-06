
export default function Day3({handlerChange}){
    function handlerChangeTheme(){
        console.log("handlerChangeThemem...");
        handlerChange();        
    }
    return (
        <div>
            <button onClick={handlerChangeTheme} >Change Theme</button>
        </div>
    )
}