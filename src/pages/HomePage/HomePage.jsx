import React from 'react';
import TodaySnap from '../../components/TodaySnap/TodaySnap'
import NewsHolder from '../../components/NewsHolder/NewsHolder'
import Aside from '../../components/Aside/Aside'
import './HomePage.css';
import DataHolder from '../../components/DataHolder/DataHolder';
import ChartPart from '../../components/ChartPart/ChartPart';



const HomePage = (props) => {
    return (
      <div className="HomePage">
        <Aside className="aside" />
        <div className="mainContainer">
          <div className="statsContainer">
            <div className="stuffContainer">
              <h2>Dashboard</h2>
              <div className='chartData'>
                { props.USHistoric && <ChartPart 
                  USHistoric={props.USHistoric}
                /> }
                { props.covidUSData && <DataHolder
                  covidUSData={props.covidUSData}
                /> } 
              </div>
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