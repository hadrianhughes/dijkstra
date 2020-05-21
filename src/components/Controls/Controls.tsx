import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { DijkstraContext } from '../Dijkstra';
import Selector from '../Selector';
import { Wrapper, Text } from './styles';

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
    <Wrapper>
      <Selector
        label="To:"
        options={toOptions}
        onChange={setTo} />
      <Text>Try moving the vertices. The blue line indicates the shortest route from A to the selected vertex.</Text>
    </Wrapper>
  );
};

export default Controls;
