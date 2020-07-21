import React, { Component } from 'react';
import ForumCard from '../../components/ForumCard/ForumCard'
import './ForumPage.css'


class ForumPage extends Component {
    render() {
        return (
            <div className="Forum">
                <div>
                    <h3>ALL FORUMS</h3>
                    <div className="collection-grid">
                        {this.props.forums.map(forum =>
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