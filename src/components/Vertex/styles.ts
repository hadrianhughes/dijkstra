import styled from 'styled-components';

const SIZE = 50;

export const Node = styled.div`
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  height: ${SIZE}px;
  line-height: 50px;
  position: absolute;
  transform: translate(-50%, -50%);
  width:  ${SIZE}px;
`;
