import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { DijkstraContext } from '../Dijkstra';
import Selector from '../Selector';

interface PropTypes {
  options: Array<string>;
}

const Controls = ({ options }) => {
  const { toAtom } = useContext(DijkstraContext);
  const [to, setTo]     = useRecoilState(toAtom);

  const toOptions = options.map(o => ({
    id:       o,
    text:     o,
    selected: o === to
  }))

  return (
    <section>
      <Selector
        label="To:"
        options={toOptions}
        onChange={setTo} />
    </section>
  );
};

export default Controls;
