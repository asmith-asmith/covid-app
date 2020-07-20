import React from 'react';
import TodaySnap from '../../components/TodaySnap/TodaySnap'
import NewsHolder from '../../components/NewsHolder/NewsHolder'
import './HomePage.css';
import DataHolder from '../../components/DataHolder/DataHolder';
import ChartPart from '../../components/ChartPart/ChartPart';



const HomePage = (props) => {
    return (
      <div className="HomePage">
        <div className="mainContainer">
          <div className="statsContainer">
            <div className="stuffContainer">
              <div className='chartData'>
                { props.USHistoric && <ChartPart 
                  USHistoric={props.USHistoric}
                /> }
                { props.covidUSData && <DataHolder
                  covidUSData={props.covidUSData}
                /> } 
              </div>
              <hr/>
              <NewsHolder
                newsUS={props.newsUS}
              />
            </div>
            { props.covidWorldData && <TodaySnap
              covidWorldData={props.covidWorldData}
            /> }
          </div>
        </div>
      </div>
    );
};

export default HomePage;