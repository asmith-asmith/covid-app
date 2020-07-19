import React from 'react';
import {Line} from 'react-chartjs-2';

function ChartPart(props){

    let setData = props.USHistoric.filter( elem => /(2020)-([0-9][0-9])-(01)/.test(elem.date))
    if(setData.length){
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Monthly Trend',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, setData[1].cases, setData[2].cases, setData[3].cases, setData[4].cases, setData[5].cases, setData[5].cases]
                }
            ]
        };  
        return (
            <div className="chart">
                <Line data={data} />
            </div>
        );
    } else{
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }
}

export default ChartPart;