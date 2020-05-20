import React, { useRef } from 'react';
import { atom } from 'recoil';
import { Container } from './styles';
import Vertices from './Vertices';
import Edges from './Edges';

interface PropTypes {
  vertices: object;
  edges:    Array<{ from: string, to: string }>;
}

export const GraphContext = React.createContext({
  getLeft: (): number => 0,
  getTop:  (): number => 0
});

const Graph = ({ vertices, edges }: PropTypes) => {
  const elRef = useRef({ offsetLeft: 0, offsetTop: 0 });
  const getLeft = () => elRef.current.offsetLeft;
  const getTop  = () => elRef.current.offsetTop;

  const vertexStates =
    Object.keys(vertices)
      .reduce((acc, k) => ({
        ...acc,
        [k]: atom({ key: `vertex_${k}`, default: vertices[k] })
      }), {});

  const realEdges = edges.map(e => ({
    from: vertexStates[e.from],
    to:   vertexStates[e.to]
  }));

  return (
    <Container ref={elRef}>
      <GraphContext.Provider value={{
        getLeft, getTop
      }}>
        <Edges items={realEdges} container={elRef} />
        <Vertices items={vertexStates} />
      </GraphContext.Provider>
    </Container>
  );
};

export default Graph;
