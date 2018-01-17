/**
 * Created by HP on 17-Jan-18.
 */
import { push as Menu } from 'react-burger-menu'
import React from 'react';


export default class SideBar extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Menu>
                <a onClick={ this.showSettings } id="home" className="menu-item" href="/">Home</a>
                <a onClick={ this.showSettings } id="about" className="menu-item" href="/about">About</a>
                <a onClick={ this.showSettings } id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}
