import React from 'react';
import {ContainerButtons, ButtonRock, ButtonPaper, ButtonScissors} from "./style"

const Buttons = () => {
    return (
        <ContainerButtons>
            <ButtonRock>Papel</ButtonRock>
            <ButtonPaper>Pedra</ButtonPaper>
            <ButtonScissors>Tesoura</ButtonScissors>
        </ContainerButtons>
    );
};

export default Buttons;