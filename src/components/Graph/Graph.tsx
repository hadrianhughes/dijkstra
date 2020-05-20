import React, { useRef } from 'react';
import { EdgeT } from '../../types';
import { Container } from './styles';
import Vertices from './Vertices';
import Edges from './Edges';

interface PropTypes {
  vertices: object;
  edges:    Array<EdgeT>;
}

const Graph = ({ vertices, edges }: PropTypes) => {
  const elRef = useRef(null);

  return (
    <Container ref={elRef}>
      <Vertices items={vertices} container={elRef} />
      <Edges items={edges} container={elRef} />
    </Container>
  );
};

export default Graph;
