/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import classNames from 'classnames';
import { Input } from 'semantic-ui-react'

const Element = props => {
    return (
        <div className={classNames('dashboard-element', {'square' : props.square})} style={{border: 'red 1px solid'}}>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            {props.changeable && <Input loading placeholder='Have lost sth?' />}
        </div>
    )
};

export default Element;