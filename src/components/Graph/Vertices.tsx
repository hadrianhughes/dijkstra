import React from 'react';
import { Atom, Ref } from '../../types';
import Vertex from '../Vertex';

interface PropTypes {
  items: object;
  container: Ref;
}

const Vertices = ({ items, container }: PropTypes) => (
  <>
    {
      Object.keys(items)
        .map(k => (
          <Vertex
            key={items[k].key}
            vAtom={items[k]}
            container={container} />
        ))
    }
  </>
);

export default Vertices;
