import Cards from "./Cards"
import FormBox from "./FormBox"
export  default function Day2({isChange}){
    return (
        <div> 
            <FormBox/>
            <Cards isChange={isChange}/>            
        </div>
    )
}