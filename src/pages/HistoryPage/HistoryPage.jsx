import React, { Component } from 'react';
import './HistoryPage.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class HistoryPage extends Component {
    state = {
        startDate: new Date()
    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    
    render() {
      return (
            <div className="HistoryPage">
                <div>
                    <h3>Select a Date:</h3>
                    <hr/>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    
                </div>
            </div>
      );
    }
  }
  
  export default HistoryPage;