import React from 'react';
import './App.css';
import Graph from './components/Graph';
import { RecoilRoot } from 'recoil';

const vertices = {
  A: { x: 150, y: 750 },
  B: { x: 340, y: 100 },
  C: { x: 530, y: 270 },
  D: { x: 710, y: 660 },
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
        edges={edges} />
    </RecoilRoot>
  </div>
);

export default App;
