import React from 'react';
import styled from 'styled-components';
import Reserva from '../Reserva/reserva';
import Ocupometro from '../Ocupometro/ocupometro'
import Agendar from '../Agendamento/agendamento';



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
        <Agendar/>
        </StyledContainer>

    
    )    
}


export default Conteudo;