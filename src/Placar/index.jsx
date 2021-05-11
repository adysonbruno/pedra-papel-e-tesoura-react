import React from 'react';
import {ContainerPlacar, CardPlayer} from "./style";


const Placar = () => {
    return (
        <ContainerPlacar>
            <CardPlayer>
                <h2>Jogador</h2>
                <h3>Pontuação</h3>
            </CardPlayer>
            <CardPlayer>
                <h2>Máquina</h2>
                <h3>Pontuação</h3>
            </CardPlayer>
        </ContainerPlacar>
    );
};

export default Placar;