import React, { useState } from "react";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Chart from "react-google-charts";
import { Button } from "@material-ui/core";
import {azulFCamara,laranjaPrincipal} from '../../assets/UI/colors'
import EventIcon from '@material-ui/icons/Event';
import SelecionaPredio from "../SelecionaPredio/selecionaPredio";


const buttonStyled={
  color: 'white',
  backgroundColor:{azulFCamara}
};

const SFormulario= styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
padding: 10px;



`;

const StyledPaper= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const colors =[ laranjaPrincipal,azulFCamara]






function Agendar() {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2021-09-16T00:00:00")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper elevation={3} >  
    <StyledPaper>
    <SFormulario>
      <TextField id="nome" label="Nome" fullWidth  variant="outlined" />
      <TextField id="email" label="email" fullWidth  variant="outlined" />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
            fullWidth 
          margin="normal"
          id="date-picker-dialog"
          label="Selecione a Data"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    
    </SFormulario>

    <SelecionaPredio/>

    <Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[['Escritório', 'Capacidade Máxima', 'Ocupação '],
    ['São Paulo, SP', 240, 60],
    ['Santos, SP', 40, 12],
   
  ]}
  options={{
    title: '',
    chartArea: { width: '50%' },
    colors: ["#FF4500","#36357E"],
    hAxis: {
      title: '',
      minValue: 0,
    },
    
  }}
  // For tests
  rootProps={{ 'data-testid': '4' }}
/>
<Button
    color="primary"
    
    
    startIcon={<EventIcon />}
  >

  Agendar

  </Button>
  </StyledPaper>
    </Paper>  
   
  );
}


export default Agendar;