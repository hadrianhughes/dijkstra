import React, { useRef, useState } from 'react';
import { atom } from 'recoil';
import { Container } from './styles';
import { get } from '../../utils';
import { Atom } from '../../types';
import Vertex from '../Vertex';

const getOffsetLeft = get(['current', 'offsetLeft']);
const getOffsetTop = get(['current', 'offsetTop']);

const Graph = () => {
  const idCounter               = useRef(0);
  const elRef                   = useRef(null);
  const [vertices, setVertices] = useState(([] as Array<Atom>))

  const addVertex = e => {
    const elLeft = getOffsetLeft(elRef, 0);
    const elTop  = getOffsetTop(elRef, 0);
    const clickX = e.clientX - elLeft;
    const clickY = e.clientY - elTop;
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
          <Vertex
            key={a.key}
            vAtom={a}
            leftEdge={getOffsetLeft(elRef, 0)}
            topEdge={getOffsetTop(elRef, 0)}/>
        ))
      }
    </Container>
  );
};

export default Graph;
