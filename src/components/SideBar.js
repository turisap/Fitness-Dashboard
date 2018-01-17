/**
 * Created by HP on 17-Jan-18.
 */
import { push as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';
import React from 'react';


export default () => (
    <Menu>
        <Link to="/" className="menu-item" href="/">Home</Link>
        <Link to="/activities" className="menu-item" href="/">Activities</Link>
    </Menu>
);