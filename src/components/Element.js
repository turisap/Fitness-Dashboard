/**
 * Created by HP on 17-Jan-18.
 */
import React from 'react';
import classNames from 'classnames';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Validator from '../validators/InputDataValidator';

const Element = props => {
    return (
        <div className={classNames('dashboard-element', {'square' : props.square})} style={{border: 'red 1px solid'}}>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            {(props.changeable && props.type === 'weight') &&
            <Input loading={props.loadingWeight} placeholder='Have lost sth?' action={{content: 'Change', onClick : changeMyWeight}} />}
        </div>
    )
};


const changeMyWeight = (e, data) => {
    console.log()
};

const mapStateToProps = state => ({
    loadingWeight : state.menuElements.loadingChangingWeight
});

export default connect(mapStateToProps, undefined)(Element);