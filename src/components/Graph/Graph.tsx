import React, { useRef } from 'react';
import { Container } from './styles';
import { get } from '../../utils';

const Graph = () => {
  const elRef   = useRef(null);

  const addVertex = e => {
    const elLeft  = get(['current', 'offsetLeft'])(elRef, 0);
    const elTop   = get(['current', 'offsetTop'])(elRef, 0);
    const clickX  = e.clientX - elLeft;
    const clickY  = e.clientY - elTop;

    console.log(`Make vertex at: ${clickX}, ${clickY}`)
  };

  return (
    <Container
      onClick={addVertex}
      ref={elRef}></Container>
  );
};

export default Graph;
