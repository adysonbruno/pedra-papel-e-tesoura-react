import React from 'react';
import {ContainerMoves, CardPlayerMove} from "./style";

const Moves = () => {
    return (
        <ContainerMoves>
            <CardPlayerMove>
                <h2>Player</h2>
                <h3>Move</h3>
            </CardPlayerMove>
            <CardPlayerMove>
                <h2>Máquina</h2>
                <h3>Move</h3>
            </CardPlayerMove>
        </ContainerMoves>
    );
};

export default Moves;