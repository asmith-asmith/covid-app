import React from 'react';

function TodaySnap(props){
    return(
        <div>
            <div className="panel panel-default small" style={{width: "250px"}}>
                <div className="panel-heading">
                    Snapshot: {Date(props.covidWorldData.updated)}
                </div>
                <div className="panel-body">
                    <h5>Total Worldwide Cases: </h5>
                    <h3>{props.covidWorldData.cases}</h3>
                    <h5>Total Worldwide Deceased: </h5>
                    <h3>{props.covidWorldData.deaths}</h3>
                    <h5>Todays Worldwide Cases: </h5>
                    <h3>{props.covidWorldData.todayCases}</h3>
                    <h5>Todays Worldwide Deaths: </h5>
                    <h3>{props.covidWorldData.todayDeaths}</h3>
                </div>
            </div>
        </div>
    )
}

export default TodaySnap;