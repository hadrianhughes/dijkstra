import React from 'react';
import { useRecoilValue } from 'recoil';
import { Atom } from '../../types';

interface PropTypes {
  from: Atom;
  to:   Atom;
}

const Edge = ({ from, to }: PropTypes) => {
  const fromValue = useRecoilValue(from);
  const toValue   = useRecoilValue(to);

  console.log(`from: ${JSON.stringify(fromValue)}`);
  console.log(`to: ${JSON.stringify(toValue)}`);

  return <div></div>;
};

export default Edge;
