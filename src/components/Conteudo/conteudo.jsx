import React from 'react';
import styled from 'styled-components';
import Reserva from '../Reserva/reserva';
import Ocupometro from '../Ocupometro/ocupometro'



const StyledContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin:32px;


`;


function Conteudo () {

    return(
        <StyledContainer> 
        <Ocupometro/>
        <Reserva/>
        </StyledContainer>

    
    )    
}


export default Conteudo;