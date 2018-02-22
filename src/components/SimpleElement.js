/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import classNames from 'classnames';


const Element = props => {
    return (
        <div className={classNames('dashboard-element', props.extraClass)}>
            <p className="dashboard-element__text">{props.title}</p>
            <p className="dashboard-element__text">{props.subtitle}</p>
        </div>
    )
};

export default Element;


