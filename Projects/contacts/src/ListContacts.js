import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }
  state = {
    query: '',
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }
  render() {
    // Destructure objects
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;
    let showContacts;
    console.log(typeof(showContacts, "************"))
    if (query) {
      const matchContact = new RegExp(escapeRegExp(this.state.query), 'i');
      showContacts=contacts.filter((contact) => matchContact.test(contact.name))
      console.log("************matchContact", matchContact)
    } else {
      showContacts = contacts;
    }
    showContacts.sort(sortBy('name'));
    return (
      <div className="list-contacts">
        {JSON.stringify(this.state)}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
          {showContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                backgroundImage: `url(${contact.avatarURL})`,
              }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => onDeleteContact(contact)} className="contact-remove">
              Remove
              </button>
            </li>))}
        </ol>
      </div>
    );
  }
}
export default ListContacts;
