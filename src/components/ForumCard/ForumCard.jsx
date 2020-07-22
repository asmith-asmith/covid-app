import React from 'react';
import './ForumCard.css'

function ForumCard(props){
    return(
        <div className='panel panel-default'>
            <div className="panel-heading">
                Title: {props.forum.title}
            </div>
            <div className="panel-body">
                {props.forum.content}
            </div>
            <div className="panel-footer">
                User: {props.forum.user.name}
            </div>
            <button
                className='btn btn-xs btn-danger margin-left-10'
                onClick={() => props.handleDeleteForum(props.forum._id)}
            >
                DELETE
            </button>
        </div>
    )
}

export default ForumCard;