import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 300px;
  height: 150px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid 2px black;
  padding: 5px;
`;

export const StyledFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledFormInput = styled.input`
  width: 150px;
`;

export const StyledFormBtn = styled.button`
  width: 150px;
  &:hover {
    box-shadow: 0 0 5px green;
  }
`;
