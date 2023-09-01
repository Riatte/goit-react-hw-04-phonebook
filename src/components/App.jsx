import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contact');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(getInitialContacts);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [
        { id: nanoid(), name: name, number: number },
        ...prevState,
      ]);
    }
  };

  const deleteUser = id => {
    setContacts(prevState => prevState.filter(contacts => contacts.id !== id));
  };

  const handleChange = ({ target }) => {
    setFilter(target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContact={createContact} />
        <h2>Contacts</h2>
        <ContactFilter handleChange={handleChange} />
        <Contacts contacts={filteredContacts} onDelete={deleteUser} />
      </div>
    </section>
  );
};
