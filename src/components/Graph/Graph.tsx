import React, { useRef } from 'react';
import { atom } from 'recoil';
import { Container } from './styles';
import Vertex from '../Vertex';

const makeVertex = (key: string, x: number, y: number) => atom({
  key,
  default: { x, y }
});

const vertices = [
  makeVertex('vertex0', 150, 75),
  makeVertex('vertex1', 340, 100),
  makeVertex('vertex2', 530, 270),
  makeVertex('vertex3', 710, 660)
];

const Graph = () => {
  const elRef = useRef(null);

  return (
    <Container ref={elRef}>
      {
        vertices.map(a => (
          <Vertex
            key={a.key}
            vAtom={a}
            container={elRef} />
        ))
      }
    </Container>
  );
};

export default Graph;
