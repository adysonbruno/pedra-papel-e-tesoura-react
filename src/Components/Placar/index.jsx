import React from 'react';
import {ContainerPlacar, ContainerCards,CardPlayer} from "./style";

const Placar = (props) => {

    const {quantityPlay, quantityCpu} = props;

    return (
        <ContainerPlacar>
            <h2>Placar</h2>
            <ContainerCards>
                <CardPlayer>
                    <h2>Jogador</h2>
                    <h3>{quantityPlay}</h3>
                </CardPlayer>
                <CardPlayer>
                    <h2>Máquina</h2>
                    <h3>{quantityCpu}</h3>
                </CardPlayer>
            </ContainerCards>
        </ContainerPlacar>
    );
};

export default Placar;