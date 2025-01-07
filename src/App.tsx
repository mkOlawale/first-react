import Displaybtn from "./Displaybtn"
import Alert from "./Alert"
import { useState } from "react";
function App() {
  const [displayalert, setdisplayalert] = useState(false);
  return (
  <>
     <div> <br />
      <div>
         { displayalert && <Alert onclose={() => setdisplayalert(false)} name="hello this is alert"/>}
      </div>
       <br />
        <Displaybtn color="danger" onClick={() => setdisplayalert(true)}>
            Hello world, What's going on
        </Displaybtn>
     </div>
     </>
  );
}

export default App
