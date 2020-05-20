import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Atom } from '../../types';
import { Node } from './styles';

interface PropTypes {
  vAtom: Atom;
  leftEdge: number;
  topEdge: number;
}

const Vertex = ({ vAtom, leftEdge, topEdge }: PropTypes) => {
  const [state, setState] = useRecoilState(vAtom);
  const [isDragging, setIsDragging] = useState(false);

  const killClick = e => {
    e.stopPropagation();
  };

  const handleMouseDown = e => {
    setIsDragging(true);
  };

  const handleMouseUp = e => {
    setIsDragging(false);
  };

  const handleMouseMove = e => {
    if (isDragging) {
      const newX = e.clientX - leftEdge;
      const newY = e.clientY - topEdge;

      setState({ x: newX, y: newY });
    }
  };

  return (
    <Node
      style={{ left: `${state.x}px`, top: `${state.y}px` }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={killClick}></Node>
  );
};

export default Vertex;
