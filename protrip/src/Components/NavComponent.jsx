import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavComponent extends Component {
    render() {
        return (
            <div className="nav">
                <button><Link className="btnLink" to="/"> <i className='fas fa-home'></i> </Link></button>
                <button><Link className="btnLink" to="/AddTrip"><i className='far fa-calendar-plus'></i></Link></button>
                <button><Link className="btnLink" to="/DisplayAllTrip"><i className="fa fa-table" aria-hidden="true"></i></Link></button>
            </div>
        );
    }
}

export default NavComponent;