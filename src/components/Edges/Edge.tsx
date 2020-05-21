import React from 'react';
import { useRecoilValue } from 'recoil';
import { Atom } from '../../types';
import { greater, lesser, xor } from '../../utils';
import { Line } from './styles';

interface PropTypes {
  from: Atom;
  to:   Atom;
}

const Edge = ({ from, to }: PropTypes) => {
  const fromValue = useRecoilValue(from);
  const toValue   = useRecoilValue(to);

  const left   = lesser(fromValue.x, toValue.x);
  const top    = lesser(fromValue.y, toValue.y);
  const width  = greater(fromValue.x, toValue.x) - left;
  const height = greater(fromValue.y, toValue.y) - top;

  return (
    <Line
      style={{ left, top, width, height }}
      backward={xor(left === toValue.x, top === toValue.y)} />
  );
};

export default Edge;
