import React, { Component } from 'react';
import * as forumService from '../../utils/forumService'
import ForumCard from '../../components/ForumCard/ForumCard'
import './ForumPage.css'


class ForumPage extends Component {
    /*--- State ---*/
    state = {
        forums: [
            {
                _id: 1,
                title: "the end is near",
                user: 'Aaron',
                comments: [
                    {
                        content: "loser",
                        user: "meeeee"
                    }
                ],
            }
        ]
    }
    /*--- Handle Methods ---*/
    

    /*--- Lifecycle Methods ---*/
    getAllForums = async () => {
        const forums = await forumService.getAll();
        this.setState({
          forums
        }, () => this.state.props.history.push('/forums'));
    }


    render() {
      return (
        <div className="Forum">
            <div>
                <h3>ALL FORUMS</h3>
                <div className="collection">
                    {this.state.forums.map(forum =>
                        <ForumCard
                            key={forum._id}
                            forum={forum}
                        />
                    )}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default ForumPage;