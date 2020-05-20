import React from 'react';
import { useRecoilState } from 'recoil';
import { Atom } from '../../types';
import { Node } from './styles';

interface PropTypes {
  vAtom: Atom;
}

const Vertex = ({ vAtom }: PropTypes) => {
  const [state, setState] = useRecoilState(vAtom);

  return (
    <Node x={state.x} y={state.y}></Node>
  );
};

export default Vertex;
