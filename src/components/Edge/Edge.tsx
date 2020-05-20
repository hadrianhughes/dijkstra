import React from 'react';
import { useRecoilValue } from 'recoil';
import { Atom } from '../../types';
import { Line } from './styles';

interface PropTypes {
  from: Atom;
  to:   Atom;
}

const Edge = ({ from, to }: PropTypes) => {
  const fromValue = useRecoilValue(from);
  const toValue   = useRecoilValue(to);

  console.log(`from: ${JSON.stringify(fromValue)}`);
  console.log(`to: ${JSON.stringify(toValue)}`);

  return (
    <Line style={{
      left: fromValue.x,
      top: fromValue.y,
      width: toValue.x - fromValue.x,
      height: toValue.y - fromValue.y
    }} />
  );
};

export default Edge;
