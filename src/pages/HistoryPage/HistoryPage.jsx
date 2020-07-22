import React, { Component } from 'react';
import './HistoryPage.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChartPart from '../../components/ChartPart/ChartPart';
import DataHolder from '../../components/DataHolder/DataHolder';



class HistoryPage extends Component {

    state = {
        startDate: this.getDate(),
        data: [],
        tags: []
    }

    handleChange = date => {
        let a = date.getDate()
        let b = date.getMonth()
        let c = date.getFullYear()
        if(a<10){
          a=`0${a}`;
        } 
        if(b<10) {
          b=`0${b}`;
        }
        date = c.toString()+b.toString()+a.toString()
        this.setState({
          startDate: date
        });
    };

    getDate() {
        let t = new Date()
        let a = t.getDate()
        let b = t.getMonth()
        let c = t.getFullYear()
        if(a<10){
          a=`0${a}`;
        } 
        if(b<10) {
          b=`0${b}`;
        }
        return c.toString()+b.toString()+a.toString()
    }

    getData (date) {
        console.log(date, "here")
        let indexDate = this.props.USHistoric.findIndex(e => e.date === 20200720)
        let chartData = this.props.USHistoric.slice(indexDate, indexDate + 7).map(elem => elem.deathIncrease)
        let chartTags = this.props.USHistoric.slice(indexDate, indexDate + 7).map(elem => elem.date.toString().substr(-4).replace(/(\d{2})(\d{2})/, "$1-$2"))
        return {chartData, chartTags}
    }

    async componentDidMount() {
        const dataGot = this.getData()
        this.setState({data: dataGot.chartData, tags: dataGot.chartTags})
    }

    async componentDidMUpdate() {
        console.log(this.state.startDate)
        const dataGot = await this.getData(this.state.startDate)
        this.setState({data: dataGot.chartData, tags: dataGot.chartTags})
    }

    render() {
        console.log(this.state.startDate)
        return (
            <div className="HistoryPage">
                <h3>Historic Data</h3>
                <hr/>
                <div className="select-part">
                    <div>
                        <h3>Select a Date:</h3>
                        <hr/>
                        <DatePicker
                            selected={new Date()}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='chartData'>
                        { this.props.USHistoric && this.state.data ? <ChartPart
                            title={"State 7 Day Trend (Deaths)"}
                            chartData={this.state.data}
                            chartTags={this.state.tags}
                        /> : <div>Loading...</div>}
                        { this.props.covidUSData && <DataHolder
                            covidUSData={this.props.covidUSData}
                        /> } 
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default HistoryPage;