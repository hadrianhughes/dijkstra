import React, { useState, useRef, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Atom } from '../../types';
import { DijkstraContext } from '../Dijkstra';
import { Node } from './styles';

interface PropTypes {
  vAtom:     Atom;
  name:      string;
  fromAtom?: Atom;
  toAtom?:   Atom;
}

const Vertex = ({ vAtom, name, fromAtom, toAtom }: PropTypes) => {
  const { getLeft, getTop } = useContext(DijkstraContext);
  const lastPosition = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const [vectorState, setVectorState] = useRecoilState(vAtom);
  const from = useRecoilValue(fromAtom);
  const to   = useRecoilValue(toAtom);

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
      onClick={e => e.stopPropagation()}
      fromSelected={from === name}
      toSelected={to === name}>{name}</Node>
  );
};

export default Vertex;
