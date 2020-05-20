import React from 'react';
import { Atom } from '../../types';
import Vertex from '../Vertex';

interface PropTypes {
  items:    object;
  fromAtom: Atom;
  toAtom:   Atom;
}

const Vertices = ({ items, fromAtom, toAtom }: PropTypes) => (
  <>
    {
      Object.keys(items)
        .map(k => (
          <Vertex
            key={items[k].key}
            vAtom={items[k]}
            name={k}
            fromAtom={fromAtom}
            toAtom={toAtom} />
        ))
    }
  </>
);

export default Vertices;
