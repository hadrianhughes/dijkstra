import React from 'react';
import { useRecoilState } from 'recoil';
import { Atom } from '../../types';
import Selector from '../Selector';

interface PropTypes {
  options:  Array<string>;
  fromAtom: Atom;
  toAtom:   Atom;
}

const Controls = ({ fromAtom, options, toAtom }: PropTypes) => {
  const [from, setFrom] = useRecoilState(fromAtom);
  const [to, setTo]     = useRecoilState(toAtom);

  const fromOptions = options.map(o => ({
    id:       o,
    text:     o,
    selected: o === from
  }));

  const toOptions = options.map(o => ({
    id:       o,
    text:     o,
    selected: o === to
  }));

  return (
    <section>
      <Selector
        label="From:"
        options={fromOptions}
        onChange={setFrom} />
      <Selector
        label="To:"
        options={toOptions}
        onChange={setTo} />
    </section>
  );
};

export default Controls;
