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
    let showContacts;
    if (this.state.query) {
      const matchContact = new RegExp(escapeRegExp(this.state.query), 'i');
    } else {
      showContacts = this.props.contacts;
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
            value={this.state.query}
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
              <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">
              Remove
              </button>
            </li>))}
        </ol>
      </div>
    );
  }
}
export default ListContacts;
