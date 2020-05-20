import React from 'react';
import Vertex from '../Vertex';

interface PropTypes {
  items: object;
}

const Vertices = ({ items }: PropTypes) => (
  <>
    {
      Object.keys(items)
        .map(k => (
          <Vertex
            key={items[k].key}
            vAtom={items[k]} />
        ))
    }
  </>
);

export default Vertices;
