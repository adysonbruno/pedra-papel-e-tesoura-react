import './App.css';
import Buttons from "./Components/Buttons";
import Moves from "./Components/Moves";
import GameResults from "./Components/GameResults";
import Placar from "./Components/Placar";

function App() {
  return (
    <div className="App">
        <h1>Rock, Paper or Scissors?</h1>
        <Placar/>
        <Moves/>
        <Buttons/>
        <GameResults/>
    </div>
  );
}

export default App;
