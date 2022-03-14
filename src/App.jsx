import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import {useState} from "react"

function App() {
const [tt,settt]= useState(true);

  return (
    <div className="App">
      <button className="toggleForm" onclick={()=>tt?settt(false):settt(true)}>
     {tt?<Rentals/>:<AddHouse/>} 
      </button>
     
     
      <br />
    </div>
  );
}

export default App;
