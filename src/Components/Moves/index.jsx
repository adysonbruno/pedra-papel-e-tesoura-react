import React from 'react';

import {ContainerMoves, CardPlayerMove, MovesImg, MovesImgRotate} from "./style";
import papel from "../../assets/img/Papel.png";
import pedra from "../../assets/img/Pedra.png";
import tesoura from "../../assets/img/Tesoura.png";

const Moves = (props) => {

    const {playerPlay, cpuPlay} = props;

    return (
        <ContainerMoves>
            <CardPlayerMove>
                <h2>Player</h2>
                {(playerPlay==="papel")? <MovesImgRotate src={papel} alt = {playerPlay} />:
                    (playerPlay=== "pedra")?<MovesImgRotate src={pedra} alt = {playerPlay} />:
                        <MovesImg src={tesoura} alt = {playerPlay}/>
                }

            </CardPlayerMove>
            <CardPlayerMove>
                <h2>Máquina</h2>
                {(cpuPlay==="papel")? <MovesImg src={papel} alt = {cpuPlay} /> :
                    (cpuPlay=== "pedra")?<MovesImg src={pedra} alt = {cpuPlay} />:
                        <MovesImgRotate src={tesoura} alt = {cpuPlay} />
                }
            </CardPlayerMove>
        </ContainerMoves>
    );
};

export default Moves;