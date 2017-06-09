import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import {Card, Button, Icon} from 'semantic-ui-react';

const ContactCard = ({contact, deleteContact}) => (
    <Card centered={true}>
        <Card.Content>
            <Card.Header>
                <Icon name="user outline"/> {contact.name.first} {contact.name.last}
            </Card.Header>
            <Card.Description>
                <p><Icon name="phone"/> {contact.phone} </p>
                <p><Icon name="mail outline"/> {contact.email} </p>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className="ui three buttons">
                <Link to={`/contacts/edit/${contact._id}`} className="ui button green">Edit</Link>
                <Button.Or />
                <Button color="red" onClick={() => deleteContact(contact._id)}>Delete</Button>
            </div>
        </Card.Content>
    </Card>
);

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default ContactCard;