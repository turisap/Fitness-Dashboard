/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';
import {CloseButton} from 'react-svg-buttons'

const Activity = props => {
    const {id, name, type, description, average_speed, max_speed, location_country} = props.activity;
    const src = `./assets/${type.toLowerCase()}.png`;
    return (
        <Card>
            <Image src={src} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{type}</Card.Meta>
                <Card.Description>Average_speed: {average_speed}, Max speed: {max_speed} </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='home' />
                {location_country}
            </Card.Content>
        </Card>
    )
};

export default Activity;