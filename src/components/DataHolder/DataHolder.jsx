import React from 'react';
import './DataHolder.css'

function DataHolder(props){

    let data = props.covidUSData.sort(function (a, b) {
        return b.death - a.death;
    });
    let tables = data.map((x, idx) =>
        <tr key={idx}><td>{x.state}</td><td>{x.death}</td><td>{x.deathIncrease}</td><td>{x.positive}</td></tr>
    )               

    return(
        <div className='DataHolder'>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0">
                    <caption>UNITED STATES</caption>
                    <thead>
                        <tr>
                        <th>State</th>
                        <th>Total Deaths</th>
                        <th>Todays Increase</th>
                        <th>Positive Cases</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tables}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataHolder;