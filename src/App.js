import './App.css';
import Buttons from "./Components/Buttons";
import Moves from "./Components/Moves";
import GameResults from "./Components/GameResults";
import Placar from "./Components/Placar";
import {useState, useEffect} from "react";

const App = () => {

    const [playerPlay, setupPlayerPLay] = useState("papel")
    const [cpuPlay, setupCpuPlay] = useState("papel")

    const [endGame, setupEndGame] = useState("")

    const [quantityPlay, setupQuantityPlay] = useState(0)
    const [quantityCpu, setupQuantityCpu] = useState(0)

    useEffect(() => {
        let result = gamePlay(playerPlay,cpuPlay)
        setupEndGame(result)
        if(result === "Você Ganhou"){
            increasePlayQuantity()
        }else if(result === "Você Perdeu"){
            increaseCpuQuantity()
        }
    }, [playerPlay, cpuPlay]);

    const randomCpuPlay = () =>{
        let randomNumber = Math.floor(Math.random() * (3));
        let plays = ["pedra", "papel", "tesoura"]
        return plays[randomNumber]
    }

    const gamePlay = (playerPlay,cpuPlay) =>{
        if (playerPlay === cpuPlay) {
               return "Empate";
        } else if (playerPlay === "pedra") {
            if (cpuPlay === "tesoura") {
                return "Você Ganhou";
            } else if (cpuPlay === "papel") {
                return "Você Perdeu";
            }
        } else if (playerPlay === "papel") {
            if (cpuPlay === "pedra") {
                return "Você Ganhou";
            } else if (cpuPlay === "tesoura") {
                return "Você Perdeu";
            }
        } else if (playerPlay === "tesoura") {
            if (cpuPlay === "papel") {
                return "Você Ganhou";
            } else if (cpuPlay === "pedra") {
                return "Você Perdeu";
            }
        }
    }

    const increasePlayQuantity = () =>{
        setupQuantityPlay(quantityPlay + 1)
    }

    const increaseCpuQuantity = () =>{
        setupQuantityCpu(quantityCpu + 1)
    }

    return (

    <div className="App">
        <h1>Rock, Paper or Scissors?</h1>
        <Placar
            quantityPlay={quantityPlay}
            quantityCpu={quantityCpu}
        />
        <Moves
            playerPlay={playerPlay}
            cpuPlay={cpuPlay}
        />
        <Buttons
            playerPlay={playerPlay}
            cpuPlay={cpuPlay}
            setupPlayerPLay={setupPlayerPLay}
            setupCpuPlay={setupCpuPlay}
            randomCpuPlay={randomCpuPlay}
            setupEndGame={setupEndGame}
            gamePlay={gamePlay}
        />
        <GameResults
            endGame={endGame}
        />
    </div>
  );
}

export default App;
