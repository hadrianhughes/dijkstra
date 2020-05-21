import React from 'react';
import { atom } from 'recoil';
import { Atom } from '../../types';

interface DijkstraProperties {
  fromAtom?: Atom;
  toAtom?:   Atom;
}

export const DijkstraContext = React.createContext({});

interface PropTypes {
  children:       React.ReactNode;
  verticesConfig: object;
  edgesConfig:    Array<{ from: string, to: string }>;
}

const DijkstraProvider = ({ children, verticesConfig, edgesConfig }: PropTypes) => {
  const fromAtom = atom({
    key:     'vertex_from',
    default: Object.keys(verticesConfig)[0]
  });

  const toAtom = atom({
    key:     'vertex_to',
    default: Object.keys(verticesConfig)[1]
  });

  const vertices =
    Object.keys(verticesConfig)
      .reduce((acc, k) => ({
        ...acc,
        [k]: atom({ key: `vertex_${k}`, default: verticesConfig[k] })
      }), {});

  const edges = edgesConfig.map(e => ({
    from: vertices[e.from],
    to:   vertices[e.to]
  }));

  return (
    <DijkstraContext.Provider value={{
      fromAtom,
      toAtom,
      vertices,
      edges
    }}>
      {children}
    </DijkstraContext.Provider>
  );
};

export default DijkstraProvider;
