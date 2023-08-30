import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormBtn,
} from './ContactFormStyled';

export class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.clear();
  };

  clear = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledFormLabel>
          Name
          <StyledFormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
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
            onChange={this.handleChange}
            value={this.state.number}
          />
        </StyledFormLabel>
        <StyledFormBtn type="submit">Add contact</StyledFormBtn>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
