import React, { useContext } from 'react';
import { DijkstraContext } from '../Dijkstra';
import Vertex from './Vertex';

const Vertices = () => {
  const { vertices, fromAtom, toAtom } = useContext(DijkstraContext);

  return (
    <>
      {
        Object.keys(vertices)
          .map(k => (
            <Vertex
              vAtom={vertices[k]}
              name={k}
              fromAtom={fromAtom}
              toAtom={toAtom} />
          ))
      }
    </>
  );
};

export default Vertices;
