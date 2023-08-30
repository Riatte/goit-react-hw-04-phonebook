import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { nanoid } from 'nanoid';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contact');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState.contact !== this.state.contacts) {
  //     localStorage.setItem('contact', JSON.stringify(this.state.contacts));
  //   }
  // }

  createContact = data => {
    this.setState(() => {
      if (
        this.state.contacts.find(
          contact => contact.name.toLowerCase() === data.name.toLowerCase()
        )
      ) {
        alert(`${data.name} is already in contacts`);
      } else {
        return {
          contacts: [
            { id: nanoid(), name: data.name, number: data.number },
            ...this.state.contacts,
          ],
        };
      }
    });
  };

  // deleteUser = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contacts => contacts.id !== id),
  //   }));
  // };

  createFilterData = data => {
    this.setState(data);
  };

  handleChange = ({ target }) => {
    this.createFilterData({ filter: target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const formatFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(formatFilter)
    );
    // return (

    //     <section>
    //     <div>
    //       <h1>Phonebook</h1>
    //       <ContactForm createContact={this.createContact} />
    //       <h2>Contacts</h2>
    //       <ContactFilter
    //         createFilterData={this.createFilterData}
    //         handleChange={this.handleChange}
    //       />
    //       <Contacts contacts={filterContacts} onDelete={this.deleteUser} />
    //       </div>
    //     </section>

    // );
  }
}
