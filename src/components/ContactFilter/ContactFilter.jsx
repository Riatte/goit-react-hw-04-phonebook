import { StyledFilter } from './ContactFilterStyled';

export function ContactFilter({ handleChange }) {
  return (
    <>
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
        />
      </StyledFilter>
    </>
  );
}
