import { StyledContacts, StyledButton } from './ContactTemplateStyled';

export const ContactTemplate = ({ name, number, id, onDelete }) => (
  <StyledContacts>
    <span>{name}:</span>
    <span>{number}:</span>
    <StyledButton
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </StyledButton>
  </StyledContacts>
);
