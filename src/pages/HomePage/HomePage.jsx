import React from 'react';
import DataHolder from '../../components/DataHolder/DataHolder'
import NewsHolder from '../../components/NewsHolder/NewsHolder'
import './HomePage.css';



const HomePage = (props) => {
    return (
      <div className="HomePage">
        <div className="flex-h align-flex-end">
          <DataHolder
          />
          <NewsHolder
          />
        </div>
      </div>
    );
};

export default HomePage;