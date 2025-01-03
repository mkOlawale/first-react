
import { useState } from "react";
function ListGroup(){

    let names = [
        "Olawale",
        "habeeb",
        "Ayomon",
        "Hackerslord"
    ]
    let [selectactive, setselectactive] = useState(-1);
    // names = [];
        return (
        <>
            <h1>List of Name</h1>
            {names.length === 0 && <p>No items found mah bruh</p>}
         <ul className="list-group">
            {names.map((n, i) => 
            <li className={ selectactive === i ? 'list-group-item active' : 'list-group-item'}
                 key={n}
                 onClick={() => { setselectactive(i);
                    console.log(n)
                  }
                  }>
                {n}
            </li>
        )}
          </ul>
          </>
        );
}
export default ListGroup