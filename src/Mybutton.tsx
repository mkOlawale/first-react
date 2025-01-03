
interface Props{
    items: String,
    heading: String,
   
}
function Mybutton({items, heading} : Props){
 return(
     <>
     <h1>{heading}</h1>
     <ul className="list-group">
    
            {items.map((item) => 
            <li key={item}>
                {item}
            </li>
            )}
        </ul>
     </>
);
   
}
export default Mybutton