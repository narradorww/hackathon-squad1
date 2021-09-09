import React from 'react';
import Button from '@material-ui/core/Button'; 
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {azulFCamara} from '../../assets/UI/colors'


const buttonStyle={
  color: 'white',
  backgroundColor:{azulFCamara}
}





function Botao() {
  return (
<>

    <Button
    style={buttonStyle}
    variant="outlined"
    
    startIcon={<EventAvailableIcon />}
  >

  Agendar

  </Button>
</>
   
  );
}

export default Botao;
