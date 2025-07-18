import React from 'react';
function LstRendering(){
    const user =[
        {id:1, name:"Yash", age:20,},
        {id:2, name:"Tirth", age:20},
        {id:3, name:"Krish", age:27},
    ];
    return(
    <>            {user.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                </div>
            ))}
            </>
    )
}
export default LstRendering;