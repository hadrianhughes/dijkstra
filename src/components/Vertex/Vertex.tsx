import React, { useState, useRef, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { Atom } from '../../types';
import { GraphContext } from '../Graph';
import { Node } from './styles';

interface PropTypes {
  vAtom: Atom;
}

const Vertex = ({ vAtom }: PropTypes) => {
  const { getLeft, getTop } = useContext(GraphContext);
  const lastPosition = useRef({ x: 0, y: 0 });
  const [vectorState, setVectorState] = useRecoilState(vAtom);
  const [isDragging, setIsDragging] = useState(false);

  const getMousePosition = (e: MouseEvent) => ({
    x: e.clientX - getLeft(),
    y: e.clientY - getTop()
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
