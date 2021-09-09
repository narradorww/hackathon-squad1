import React from 'react';
import Button from '@material-ui/core/Button';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';







function Botao() {
  return (
<>

    <Button
    variant="contained"
    color="secondary"
    startIcon={<EventAvailableIcon />}
  >

  Agendar

  </Button>
</>
   
  );
}

export default Botao;
