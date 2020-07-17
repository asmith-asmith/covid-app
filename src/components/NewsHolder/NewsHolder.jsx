import React from 'react';
import './NewsHolder.css'

function NewsHolder(props){
    console.log(props.newsUS)
    return(
        <div className='NewsHolder'>
            <h1>{props.newsUS}</h1>
        </div>
    )
}

export default NewsHolder;