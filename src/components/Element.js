/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import classNames from 'classnames';

const Element = props => {
    return (
        <div className={classNames('dashboard-element', {'square' : this.props.square})}>
            <p>{this.props.title}</p>
            <p>{this.props.subtitle}</p>
            {this.props.children}
        </div>
    )
};

export default Element;