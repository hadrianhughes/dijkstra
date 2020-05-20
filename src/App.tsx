import React from 'react';
import { atom } from 'recoil';
import { Atom, EdgeT } from './types';
import './App.css';
import Graph from './components/Graph';
import { RecoilRoot } from 'recoil';


const makeVertex = (key: string, x: number, y: number): Atom => atom({
  key,
  default: { x, y }
});

const makeEdge = (vs: object) => (from: string, to: string): EdgeT => ({ from: vs[from], to: vs[to] });

const vertices = {
  A: makeVertex('vertex0', 150, 75),
  B: makeVertex('vertex1', 340, 100),
  C: makeVertex('vertex2', 530, 270),
  D: makeVertex('vertex3', 710, 660)
};

const edges = [
  { from: 'A', to: 'B' },
  { from: 'A', to: 'C' },
  { from: 'B', to: 'C' },
  { from: 'B', to: 'D' }
];

const App = () => (
  <div className="App">
    <RecoilRoot>
      <Graph
        vertices={vertices}
        edges={edges.map(e => makeEdge(vertices)(e.from, e.to))} />
    </RecoilRoot>
  </div>
);

export default App;
