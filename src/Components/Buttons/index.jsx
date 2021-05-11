import React from 'react';
import {ContainerButtons, ButtonRock, ButtonPaper, ButtonScissors} from "./style"

const Buttons = () => {
    return (
        <ContainerButtons>
            <ButtonRock>Rock</ButtonRock>
            <ButtonPaper>Paper</ButtonPaper>
            <ButtonScissors>Scissors</ButtonScissors>
        </ContainerButtons>
    );
};

export default Buttons;