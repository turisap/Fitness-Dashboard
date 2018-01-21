/**
 * Created by HP on 21-Jan-18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Club = props => {
    const {name, cover_photo_small, sport_type, city, country} = props.club;
    return (
        <div>
            <img src={cover_photo_small}/>
            <h4>{name}</h4>
            <p>{sport_type}</p>
            <p>{[city, country]}</p>
        </div>
    )
};

Club.proptypes = {
    club : PropTypes.object.isRequired,
};

export default Club;