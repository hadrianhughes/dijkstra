import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { Atom, Ref } from '../../types';
import { get } from '../../utils';
import { Node } from './styles';

interface PropTypes {
  vAtom:     Atom;
  container: Ref;
}

const Vertex = ({ vAtom, container }: PropTypes) => {
  const lastPosition = useRef({ x: 0, y: 0 });
  const [vectorState, setVectorState] = useRecoilState(vAtom);
  const [isDragging, setIsDragging] = useState(false);

  const getMousePosition = (e: MouseEvent) => ({
    x: e.clientX - get(['current', 'offsetLeft'])(container, 0),
    y: e.clientY - get(['current', 'offsetTop'])(container, 0)
  });

  const handleMouseDown = (e: MouseEvent) => {
    lastPosition.current = getMousePosition(e);
    setIsDragging(true);
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsDragging(false);

    const { x, y } = getMousePosition(e);
    if (x === lastPosition.current.x ||
        y === lastPosition.current.y) {
      console.log('was a click');
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setVectorState(getMousePosition(e));
    }
  };

  return (
    <Node
      style={{ left: `${vectorState.x}px`, top: `${vectorState.y}px` }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={e => e.stopPropagation()}></Node>
  );
};

export default Vertex;
