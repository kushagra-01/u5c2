import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
      {<AddHouse/>}
      </button>
      <button>
      {Rentals}
      </button>
     
      <br />
    </div>
  );
}

export default App;
