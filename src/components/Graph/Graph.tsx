import React, { useRef } from 'react';
import { Edge } from '../../types';
import { Container } from './styles';
import Vertices from './Vertices';

interface PropTypes {
  vertices: object;
  edges:    Array<Edge>;
}

const Graph = ({ vertices, edges }: PropTypes) => {
  const elRef = useRef(null);

  return (
    <Container ref={elRef}>
      <Vertices items={vertices} container={elRef} />
    </Container>
  );
};

export default Graph;
