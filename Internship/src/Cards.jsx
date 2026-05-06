import Card from "./Card"
// import {useState} from 'react';
export default function Cards({isChange}){
    // let [users, setUsers]=useState({});
    let users=[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s",
             name:"Nandni",
             age:21,
             status:true
            },
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s",
                name:"Nitin",
                age:22,
                status:false
            },
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzG_QxHXM6ZrzIcMosRG3uJeJ-A1mAJiDBw&s",
                name:"Karn",
                age:40,
                status:true
            },
        ];
    return (
        <div style={{ marginTop:"40px"}}>
            <h3>Our Users Details</h3>
            <Card data={users} isChange={isChange} />
        </div>
    )
}
