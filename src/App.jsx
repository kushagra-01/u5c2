import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [db, setdb] = useState(true)


  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>
          db?setdb(false):setdb(true)
      }>
        {db?"Add House":"Rentals"}
      </button>
      {db?<Rentals/>:<AddHouse/>}
      <br />
    </div>
  );
}

export default App;