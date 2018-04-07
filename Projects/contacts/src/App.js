import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import './App.css';


class App extends Component {
 state = {
  contacts: []

  }
  componentDidMount() {
    // When a promise is returned, pass in contacts to re-render
    ContactsAPI.getAll().then((contacts) => {
      this.setState( { contacts }) // Where ( { contacts: contacts })
    })
  }
  removeContact = (contact) => {
    // Change state based on current state
    this.setState(state => ({
      contacts: state.contacts.filter(contactItem => contactItem.id !== contact.id),
    }));
  }
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
export default App;
