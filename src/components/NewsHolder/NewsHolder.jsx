import React from 'react';
import './NewsHolder.css';

function NewsHolder(props){
    if(props.newsUS.length){
        let data = props.newsUS.map((x, idx) =>
            <tr key={idx}><td><a href={x.url}>{x.title}</a></td><td>{x.source.name}</td></tr>
        ) 
        return(
            <div className='NewsHolder'>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                            <th>Title</th>
                            <th>Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                </div>
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