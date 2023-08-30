import { useState } from 'react';
import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormBtn,
} from './ContactFormStyled';

export const ContactForm = ({ createContact }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    createContact({
      name: name,
      number: number,
    });
    clear();
  };

  const clear = () => {
    setName('');
    setNumber('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormLabel>
        Name
        <StyledFormInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
          value={name}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Number
        <StyledFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
          value={number}
        />
      </StyledFormLabel>
      <StyledFormBtn type="submit">Add contact</StyledFormBtn>
    </StyledForm>
  );
};
