import styled from 'styled-components';

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
  width:  ${SIZE}px;
`;
