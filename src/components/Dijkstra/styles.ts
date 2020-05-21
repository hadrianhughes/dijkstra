import styled from 'styled-components';

const WIDTH = 1000;
const HEIGHT = 800;

export const Container = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: ${HEIGHT}px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  position: relative;
  text-align: left;
  width:  ${WIDTH}px;
`;
