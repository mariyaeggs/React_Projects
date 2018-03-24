import React, { Component } from 'react';
import ListContacts from './ListContacts';
import './App.css';


class App extends Component {
  state = {
    contacts: [
    {
      id: 'mariya',
      name: 'Mariya Eggensperger',
      email: 'eggenspergermariya@gmail.com',
      avatarURL: 'http://localhost:5001/mariya.jpg',
    },
    {
      id: 'scott',
      name: 'Scott Eggensperger',
      email: 'scotteggensperger@gmail.com',
      avatarURL: 'http://localhost:5001/scott.jpg',
    },
    {
      id: 'sofia',
      name: 'Sofia Eggensperger',
      email: 'sofiaeggensperger@gmail.com',
      avatarURL: 'http://localhost:5001/sofia.jpg',
    },
    {
      id: 'oliver',
      name: 'Oliver Eggensperger',
      email: 'ollieggensperger@gmail.com',
      avatarURL: 'http://localhost:5001/oliver.jpg',
    },
  ]
}
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
