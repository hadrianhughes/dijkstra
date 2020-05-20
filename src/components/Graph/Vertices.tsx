import React from 'react';
import { Atom } from '../../types';
import Vertex from '../Vertex';

interface PropTypes {
  items:    object;
  fromAtom: Atom;
}

const Vertices = ({ items, fromAtom }: PropTypes) => (
  <>
    {
      Object.keys(items)
        .map(k => (
          <Vertex
            key={items[k].key}
            vAtom={items[k]}
            name={k}
            fromAtom={fromAtom} />
        ))
    }
  </>
);

export default Vertices;
