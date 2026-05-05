export default function FormBox(){
 return(
    <div>
        <form action="">
            <label htmlFor="user">User Name: </label>
            <input type="text"  id="user" placeholder="Enter userName"/> <br /> <br />

            <label htmlFor="age"> Enter Age: </label>
            <input type="number"  id="age" placeholder="Enter Age"/><br /> <br />

            <label htmlFor="url"> Enter Url: </label>
            <input type="text"  id="url" placeholder="Enter url"/><br /> <br />

            <button>Submit</button>
            

        </form>
    </div>
 )
}