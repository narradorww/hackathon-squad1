import React,{useState} from 'react';
import Chart from "react-google-charts";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


const StyledChart= styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 32px;

`;

export default function Ocupometro() {
const [ocupaSaoPaulo, setOcupaSaoPaulo] = useState([
    ['Label', 'Value'],
    ['São Paulo', 35],        
  ])
  const [ocupaSantos, setOcupaSantos] = useState([
    ['Label', 'Value'],
    ['Santos', 12],        
  ])

  
    return (
        <StyledChart>

      <Paper elevation={3} >      
      <Chart
        width={400}
        height={120}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={ocupaSaoPaulo}
        options={{
          redFrom: 40,
          redTo: 100,
          yellowFrom: 38,
          yellowTo: 40,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
     

    
      <Chart
        width={400}
        height={120}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={ocupaSantos}
        options={{
          redFrom: 40,
          redTo: 100,
          yellowFrom: 38,
          yellowTo: 40,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      </Paper>
        </StyledChart>
      
    )
  


    
}


