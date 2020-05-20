import React from 'react';
import { Ref, EdgeT } from '../../types';
import Edge from '../Edge';

interface PropTypes {
  items: Array<EdgeT>;
}

const Edges = ({ items }: PropTypes) => (
  <>
    {
      items.map((e, i) => (
        <Edge
          key={i}
          from={e.from}
          to={e.to} />
      ))
    }
  </>
);

export default Edges;
