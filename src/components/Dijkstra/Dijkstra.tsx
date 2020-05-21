import React, { ReactNode, useRef } from 'react';
import { atom, selector } from 'recoil';
import { Atom, EdgeT } from '../../types';
import { Container } from './styles';
import { dijkstra, getPath } from './algorithm';

interface DijkstraProperties {
  getLeft:     () => number;
  getTop:      () => number;
  toAtom?:     Atom;
  vertices:    object;
  edges:       Array<EdgeT>;
  pathAtom?: Atom;
}

const initialState: DijkstraProperties = {
  getLeft:  () => 0,
  getTop:   () => 0,
  vertices: {},
  edges:    []
};

export const DijkstraContext = React.createContext(initialState);

interface PropTypes {
  children:       ReactNode;
  verticesConfig: object;
  edgesConfig:    Array<{ from: string, to: string }>;
}

const DijkstraProvider = ({ children, verticesConfig, edgesConfig }: PropTypes) => {
  const containerRef = useRef({ offsetLeft: 0, offsetTop: 0 });
  const getLeft = () => containerRef.current.offsetLeft;
  const getTop  = () => containerRef.current.offsetTop;

  const toAtom = atom({
    key:     'vertex_to',
    default: Object.keys(verticesConfig)[1]
  });

  const vertices =
    Object.keys(verticesConfig)
      .reduce((acc, k) => ({
        ...acc,
        [k]: atom({
          key: `vertex_${k}`,
          default: {
            ...verticesConfig[k],
            name: k
          }
        })
      }), {});

  const edges = edgesConfig.map(e => ({
    from: vertices[e.from],
    to:   vertices[e.to]
  }));

  const paths = selector({
    key: 'paths',
    get: ({ get }) => {
      const vertexPositions =
        Object.keys(vertices)
          .reduce((acc, k) => ({
            ...acc,
            [k]: get(vertices[k])
          }), {});

      return dijkstra(vertexPositions, edgesConfig);
    }
  });

  const pathAtom = selector({
    key: 'active_path',
    get: ({ get }) => getPath(get(paths), get(toAtom))
  });

  return (
    <DijkstraContext.Provider value={{
      getLeft,
      getTop,
      toAtom,
      vertices,
      edges,
      pathAtom
    }}>
      <Container ref={containerRef}>
        {children}
      </Container>
    </DijkstraContext.Provider>
  );
};

export default DijkstraProvider;
