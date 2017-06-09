import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Segment, Divider } from 'semantic-ui-react'

import ContactList from '../components/ContactList';
import Pagination from '../components/Pagination';
import {fetchContacts, deleteContact} from '../actions/contact-actions';

class ContactListPage extends Component {

    componentDidMount() {
        this.props.fetchContacts(this.props.skip * this.props.limit);
    }

    render() {
        const {skip, limit, total } = this.props;
        const pageCount = Math.ceil(total/limit);
        const changePage = (data) => {this.props.fetchContacts(data.selected * limit)};
        return (
            <Segment>
                <h1 style={{textAlign: 'center'}}>List of Contacts</h1>
                <Divider/>
                <ContactList
                    contacts={this.props.contacts}
                    deleteContact={this.props.deleteContact}
                    loading={this.props.loading}
                />
                <Divider/>
                <Pagination changePage={changePage} pageCount={pageCount} skip={skip} limit={limit}/>

            </Segment>
        )
    }
}

function mapStateToProps(state) {
    const {contacts, loading, total, limit, skip } = state.contactStore;
    return {contacts, loading, total, limit, skip }
}

export default connect(mapStateToProps, {fetchContacts, deleteContact})(ContactListPage);