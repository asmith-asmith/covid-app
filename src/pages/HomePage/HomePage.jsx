import React from 'react';
import TodaySnap from '../../components/TodaySnap/TodaySnap'
import NewsHolder from '../../components/NewsHolder/NewsHolder'
import './HomePage.css';
import DataHolder from '../../components/DataHolder/DataHolder';
import ChartPart from '../../components/ChartPart/ChartPart';



const HomePage = (props) => {

  // let chartData = props.USHistoric.filter( elem => /(2020)-([0-9][0-9])-(01)/.test(elem.date))
  let chartData = props.USHistoric.slice(0, 7).map(elem => elem.deathIncrease)
  let chartTags = props.USHistoric.slice(0, 7).map(elem => elem.date.toString().substr(-4).replace(/(\d{2})(\d{2})/, "$1-$2"))
  
  return (
    <div className="HomePage">
      <div className="mainContainer">
        <h3>Dashboard</h3>
        <hr/>
        <div className="statsContainer">
          <div className="stuffContainer">
            <div className='chartData'>
              { props.USHistoric && <ChartPart 
                chartData={chartData}
                chartTags={chartTags}
                title={'7 Day Trend (Deaths)'}
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