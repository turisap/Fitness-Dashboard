/**
 * Created by HP on 19-Jan-18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react'

const Activity = props => {
    const {id, name, type, description} = props.activity;
    const src = `../assets/img/${type.toLowerCase()}.png`;
    return (
        <Card>
            <Image src={src} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{type}</Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
            </Card.Content>
        </Card>
    )
};

export default Activity;