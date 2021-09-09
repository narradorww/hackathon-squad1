import React from 'react';
import styled from 'styled-components';
import Botao from '../button/button'
import {azulFCamara, laranjaPrincipal} from '../../assets/UI/colors'
import logo from '../../assets/img/logoFundoLaranja.png'

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
font-size: xx-large;
font-weight: 900;
background:${laranjaPrincipal};
color: ${azulFCamara};
height: 64px;
padding: 32px;
`;



function Cabecalho(){
 return (
     <Header>
     <div> <img src={logo} alt="Logo" /></div>
     <div> GoBackHQ </div>
     <Botao />
     </Header>
 )
}


export default Cabecalho;