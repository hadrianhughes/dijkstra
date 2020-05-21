import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { DijkstraContext } from '../Dijkstra';
import Selector from '../Selector';

interface PropTypes {
  options: Array<string>;
}

const Controls = ({ options }) => {
  const { fromAtom, toAtom } = useContext(DijkstraContext);
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
  }))

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
