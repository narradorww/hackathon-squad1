import React from 'react';
import styled from 'styled-components';
import Botao from '../button/button'
import {laranjaPrincipal} from '../../assets/UI/colors'

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background:${laranjaPrincipal};
height: 64px;
padding: 32px;



`;


function Cabecalho(){
 return (
     <Header>
     <div> todo: Logo </div>
     <div> GoBackHQ </div>
     <Botao/>
     </Header>
 )
}


export default Cabecalho;