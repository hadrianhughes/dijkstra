import React, { useRef } from 'react';
import { atom } from 'recoil';
import { Container } from './styles';
import Vertices from './Vertices';
import Edges from './Edges';
import Controls from './Controls';

interface PropTypes {
  vertices: object;
  edges:    Array<{ from: string, to: string }>;
}

export const GraphContext = React.createContext({
  getLeft: (): number => 0,
  getTop:  (): number => 0
});

const Graph = ({ vertices, edges }: PropTypes) => {
  const elRef   = useRef({ offsetLeft: 0, offsetTop: 0 });
  const getLeft = () => elRef.current.offsetLeft;
  const getTop  = () => elRef.current.offsetTop;

  const fromState = atom({
    key: 'vertex_from',
    default: Object.keys(vertices)[0]
  });

  const toState = atom({
    key: 'vertex_to',
    default: Object.keys(vertices)[1]
  });

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
        <Controls
          options={Object.keys(vertices)}
          fromAtom={fromState}
          toAtom={toState} />
        <Edges
          items={realEdges} />
        <Vertices
          items={vertexStates}
          fromAtom={fromState} />
      </GraphContext.Provider>
    </Container>
  );
};

export default Graph;
