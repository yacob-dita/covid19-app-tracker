import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import  { Chart as ChartJs } from "chart.js/auto";
import styles from './Chart.module.css';

const Chart = ({data: {confirmed, deaths, recovered }, country})=> {
    const [dailyData, setDailyData] = useState([]);

    // useEffect(() => {
    
    // const fetchAPI = async () =>{
    //      setDailyData(await fetchDailyData());
    //   }
    //   // console.log(dailyData);
    //   fetchAPI();
    // });
    useEffect(() => {
      const fetchAPI = async()=>{
        const setDailyData = await fetch("url");
        const data = await setDailyData.json()
        // console.log(data)
      }
      fetchAPI();
    }, []);


    const lineChart = (
        dailyData.length
        ? (
          <Line
            data = {{
              labels: dailyData.map(({ date }) => date),
              datasets:[{
               data: dailyData.map(({ confirmed })=>confirmed),
               label: 'Infected',
               borderColor: '#3333ff',
               borderline:"solid",
               fill: true,
              }, {
              data:dailyData.map(({ deaths })=> deaths),
              label:'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
              }],
          }}
         height={400}
         width ={600}
          />): null 
    );
// console.log(confirmed, recovered, deaths);

const barChart = (
  confirmed
  ?(
     <Bar 
     data={{
      labels: ['Infected','Recovered','Deaths'],
      datasets:[{
        label:'people',
        backgroundColor:[
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0 , 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        data: [confirmed.value, recovered.value, deaths.value]
        
      }]
     }} 
     height ={400}
     width ={600}
     options={{
       legend: { display: false},
       title: { display: true, text: `Current state in ${country}`},

     }}
     />
  ):null
)


   return(
      <div className={styles.container}>
       {country? barChart : lineChart}   
      </div>
  )
}

export default Chart;