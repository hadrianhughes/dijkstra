import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #585858;
  cursor: pointer;
  margin: 10px 5px;

  ${props => props.selected ? css`background-color: #4AABFF;` : ''}
`;
