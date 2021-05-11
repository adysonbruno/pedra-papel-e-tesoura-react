import React from 'react';
import {ContainerGameResults} from "./style";

const GameResults = (props) => {
    const {setupPlayerPLay, setupCpuPlay, setupQuantityPlay, setupQuantityCpu, endGame, switchGameOver} = props;

    return (
        <ContainerGameResults>
            <h2>{endGame}</h2>
            <button onClick={() =>
            {
                setupPlayerPLay("papel");
                setupCpuPlay("papel");
                setupQuantityPlay(0);
                setupQuantityCpu(0);
                switchGameOver()
            }
            }>Jogar Novamente</button>
        </ContainerGameResults>
    );
};

export default GameResults;