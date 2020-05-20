import React, { useRef } from 'react';
import { Edge } from '../../types';
import { Container } from './styles';
import Vertex from '../Vertex';

interface PropTypes {
  vertices: object;
  edges:    Array<Edge>;
}

const Graph = ({ vertices, edges }: PropTypes) => {
  const elRef = useRef(null);

  return (
    <Container ref={elRef}>
      {
        Object.keys(vertices)
          .map(k => (
            <Vertex
              key={vertices[k].key}
              vAtom={vertices[k]}
              container={elRef} />
          ))
      }
    </Container>
  );
};

export default Graph;
