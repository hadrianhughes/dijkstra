import React, { useRef } from 'react';
import { EdgeT } from '../../types';
import { Container } from './styles';
import Vertices from './Vertices';
import Edges from './Edges';

interface PropTypes {
  vertices: object;
  edges:    Array<EdgeT>;
}

export const GraphContext = React.createContext({
  getLeft: (): number => 0,
  getTop:  (): number => 0
});

const Graph = ({ vertices, edges }: PropTypes) => {
  const elRef = useRef({ offsetLeft: 0, offsetTop: 0 });
  const getLeft = () => elRef.current.offsetLeft;
  const getTop  = () => elRef.current.offsetTop;

  return (
    <Container ref={elRef}>
      <GraphContext.Provider value={{
        getLeft, getTop
      }}>
        <Edges items={edges} container={elRef} />
        <Vertices items={vertices} />
      </GraphContext.Provider>
    </Container>
  );
};

export default Graph;
