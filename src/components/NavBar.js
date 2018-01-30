/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default props => (
    <div className="navbar">
        <Link to={'/'} className="navbar__link">Profile</Link>
        <Link to={'/activities'} className="navbar__link">Activities</Link>
        <Link to={'/clubs'} className="navbar__link">Clubs</Link>
    </div>
)