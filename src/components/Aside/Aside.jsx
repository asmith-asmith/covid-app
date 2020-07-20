import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.css'

function Aside(){
    return(
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to='/' className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                <Link to='/forums' className="list-group-item list-group-item-action bg-light">Forums</Link>
                <Link to='' className="list-group-item list-group-item-action bg-light">Overview</Link>
                <Link to='' className="list-group-item list-group-item-action bg-light">Events</Link>
                <Link to='' className="list-group-item list-group-item-action bg-light">Profile</Link>
                <Link to='' className="list-group-item list-group-item-action bg-light">Status</Link>
            </div>
        </div> 
    )
}

export default Aside;