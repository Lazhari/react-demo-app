import React from 'react';
import {Card, Dimmer, Loader} from 'semantic-ui-react';
import ContactCard from './ContactCard';

const ContactList = ({contacts, deleteContact, loading}) => {
    const cards = () => {
        return contacts.map(contact => {
            return (
                <ContactCard
                    key={contact._id}
                    contact={contact}
                    deleteContact={deleteContact}/>
            )
        })
    };
    return (
        <div>
            <Dimmer active={loading}>
                <Loader />
            </Dimmer>
            <Card.Group doubling={true} stackable={true}>
                { cards() }
            </Card.Group>
        </div>
    )
};

export default ContactList;