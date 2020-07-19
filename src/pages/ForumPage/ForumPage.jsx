import React, { Component } from 'react';
import * as forumService from '../../utils/forumService'
import Aside from '../../components/Aside/Aside'
import ForumCard from '../../components/ForumCard/ForumCard'
import './ForumPage.css'


class ForumPage extends Component {
    /*--- State ---*/
    state = {
        forums: []
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
            <Aside className="aside" />
            <div>
                <h3>ALL FORUMS</h3>
                <div>
                    <ForumCard/>
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