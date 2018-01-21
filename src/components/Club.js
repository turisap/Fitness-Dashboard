/**
 * Created by HP on 21-Jan-18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import {leaveClub} from '../actions/clubs';

const Club = props => {
    const {id, name, cover_photo_small, sport_type, city, country} = props.club;
    return (
        <div>
            <img src={cover_photo_small}/>
            <h4>{name}</h4>
            <p>{sport_type}</p>
            <p>{[city, ' ', country]}</p>
            <Icon name="delete" color="red" size="huge" onClick={() => props.leaveClub(id)}
                  className={classNames({'club-leave-icon--loading' : props.loadingLeaveButton})}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    leaveClub : id => dispatch(leaveClub(id))
});

const mapStateToProps = state => ({
    loadingLeaveButton : state.menuElements.loadingElements.leavingClub
});

Club.proptypes = {
    club : PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Club);