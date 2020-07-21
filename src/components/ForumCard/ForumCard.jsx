import React from 'react';
import './ForumCard.css'

function ForumCard(props){
    return(
        <div className='panel panel-default'>
            <div className="panel-heading">
                {props.forum.title}
            </div>
            <div className="panel-body">
                {props.forum.content}
            </div>
            <div class="panel-footer">
                {props.forum.user}
            </div>
        </div>
    )
}

export default ForumCard;