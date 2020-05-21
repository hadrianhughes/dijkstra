import React, { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { Atom } from '../../types';
import { greater, lesser, xor } from '../../utils';
import { DijkstraContext } from '../Dijkstra';
import { Line } from './styles';

interface PropTypes {
  from: Atom;
  to:   Atom;
}

const Edge = ({ from, to }: PropTypes) => {
  const { pathAtom } = useContext(DijkstraContext);

  const fromValue = useRecoilValue(from);
  const toValue   = useRecoilValue(to);
  const path      = useRecoilValue(pathAtom);

  const active = path.includes(fromValue.name) && path.includes(toValue.name);

  const left   = lesser(fromValue.x, toValue.x);
  const top    = lesser(fromValue.y, toValue.y);
  const width  = greater(fromValue.x, toValue.x) - left;
  const height = greater(fromValue.y, toValue.y) - top;

  return (
    <Line
      style={{ left, top, width, height }}
      backward={xor(left === toValue.x, top === toValue.y)}
      active={active} />
  );
};

export default Edge;
