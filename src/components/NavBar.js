/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div>
        <Link to={'/'}>Profile</Link>
        <Link to={'/activities'}>Activities</Link>
        <Link to={'/clubs'}>Clubs</Link>
    </div>
)