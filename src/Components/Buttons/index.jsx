import React from 'react';
import {ContainerButtons, ButtonRock, ButtonPaper, ButtonScissors} from "./style"

const Buttons = (props) => {
    const {setupPlayerPLay, setupCpuPlay,randomCpuPlay} = props;

    return (
        <ContainerButtons>
            <ButtonRock
                onClick = {() => {
                    setupCpuPlay(randomCpuPlay());
                    setupPlayerPLay("pedra");
                    }}>Rock</ButtonRock>
            <ButtonPaper
                onClick = {() => {
                    setupCpuPlay(randomCpuPlay());
                    setupPlayerPLay("papel");
                    }} >Paper</ButtonPaper>
            <ButtonScissors onClick = {() => {
                setupCpuPlay(randomCpuPlay());
                setupPlayerPLay("tesoura");
                }} >Scissors</ButtonScissors>
        </ContainerButtons>
    );
};

export default Buttons;