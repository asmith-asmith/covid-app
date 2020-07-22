import React from 'react';
import {Line} from 'react-chartjs-2';
import './ChartPart.css'

function ChartPart(props){
    let setData = props.chartData
    let setTags = props.chartTags
    if(setData.length){
        const data = {
            labels: [setTags[6], setTags[5], setTags[4], setTags[3], setTags[2], setTags[1], setTags[0]],
            datasets: [
                {
                    label: props.title,
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
                    data: [setData[6], setData[5], setData[4], setData[3], setData[2], setData[1], setData[0]]
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