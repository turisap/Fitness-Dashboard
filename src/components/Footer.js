/**
 * Created by HP on 28-Jan-18.
 */
import React from 'react';
import { Icon } from 'semantic-ui-react'

const Footer = props => (
    <div className="footer">
        <div className="footer__element">
            <Icon name='ticket'/>
            <p className="footer__text">Sed luctus elit risus, et cursus massa eleifend quis.</p>
        </div>
        <div className="footer__element">
            <Icon name="options"/>
            <p className="footer__text"> Fusce ipsum nisl, porta at ante at, scelerisque mattis enim. </p>
        </div>
        <div className="footer__element">
            <Icon name="heartbeat"/>
            <p className="footer__text">In commodo purus et posuere tempus</p>
        </div>
    </div>
);

export default Footer;
