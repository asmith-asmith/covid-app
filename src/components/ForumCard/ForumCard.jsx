import React from 'react';
import './ForumCard.css'

function ForumCard(props){
    return(
        <div className='ForumCard'>
            <div className="collection-item blue-grey-text text-darken-2">
                <div className="card-body">
                    {props.forum.title}
                </div>
            </div>
        </div>
    )
}

export default ForumCard;