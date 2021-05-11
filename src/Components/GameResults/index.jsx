import React from 'react';
import {ContainerGameResults} from "./style";

const GameResults = (props) => {
    const {endGame} = props;
    return (
        <ContainerGameResults>
            <h2>{endGame}</h2>
            <button>Jogar Novamente</button>
        </ContainerGameResults>
    );
};

export default GameResults;