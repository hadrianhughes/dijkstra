import styled, { css } from 'styled-components';

const SIZE = 50;

export const Node = styled.div`
  background-color: #585858;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: ${SIZE}px;
  line-height: 50px;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  user-select: none;
  width:  ${SIZE}px;

  ${props => props.fromSelected ? css`background-color: #53d853;` : ''}
  ${props => props.toSelected ? css`background-color: #ff3c3c;` : ''}
`;
