import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.css'

function Aside(){
    return(
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to='/' className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                <Link to='/status' className="list-group-item list-group-item-action bg-light">Status</Link>
                <Link to='/forums' className="list-group-item list-group-item-action bg-light">Forums</Link>
                <Link to='/forums/add' className="list-group-item list-group-item-action bg-light">Create Forum</Link>
                <Link to='/wiki' className="list-group-item list-group-item-action bg-light">Wiki</Link>
                <Link to='' className="list-group-item list-group-item-action bg-light">Built By</Link>
            </div>
        </div> 
    )
}

export default Aside;