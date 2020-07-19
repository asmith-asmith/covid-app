import React from 'react';
import './NewsHolder.css'

function NewsHolder(props){
    console.log(props.newsUS)
    if(props.newsUS.length){
        return(
            <div className='NewsHolder'>
                <h1>{props.newsUS[0].title}</h1>
            </div>
        )
    } else {
        return(
            <div className='NewsHolder'>
                <h1>Loading...</h1>
            </div>
        )
    }
}

export default NewsHolder;