/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import classNames from 'classnames';


const Element = props => {
    return (
        <div className={classNames('dashboard-element', {'square' : props.square})} style={{border: 'red 1px solid'}}>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
        </div>
    )
};

export default Element;


