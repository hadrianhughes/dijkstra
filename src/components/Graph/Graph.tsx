import React, { useRef, useState } from 'react';
import { atom } from 'recoil';
import { Container } from './styles';
import { get } from '../../utils';
import { Atom } from '../../types';
import Vertex from '../Vertex';

const Graph = () => {
  const idCounter               = useRef(0);
  const elRef                   = useRef(null);
  const [vertices, setVertices] = useState(([] as Array<Atom>))

  const addVertex = e => {
    const elLeft  = get(['current', 'offsetLeft'])(elRef, 0);
    const elTop   = get(['current', 'offsetTop'])(elRef, 0);
    const clickX  = e.clientX - elLeft;
    const clickY  = e.clientY - elTop;
    idCounter.current += 1;

    setVertices([
      ...vertices,
      atom({
        key: idCounter.current,
        default: {
          x: clickX,
          y: clickY
        }
      })
    ])
  };

  return (
    <Container
      onClick={addVertex}
      ref={elRef}>
      {
        vertices.map(a => (
          <Vertex key={a.key} vAtom={a} />
        ))
      }
    </Container>
  );
};

export default Graph;
