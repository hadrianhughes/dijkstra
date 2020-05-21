import React, { useContext } from 'react';
import { DijkstraContext } from '../Dijkstra';
import Edge from './Edge';

const Edges = () => {
  const { edges } = useContext(DijkstraContext);

  return (
    <>
      {
        edges.map((e, i) => (
          <Edge
            key={i}
            from={e.from}
            to={e.to}/>
        ))
      }
    </>
  );
};

export default Edges;
