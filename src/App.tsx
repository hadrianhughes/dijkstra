import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import DijkstraProvider from './components/Dijkstra';
import Vertices from './components/Vertices';
import Edges from './components/Edges';
import Controls from './components/Controls';

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
  { from: 'B', to: 'D' },
  { from: 'C', to: 'D' }
];

const App = () => (
  <div className="App">
    <RecoilRoot>
      <DijkstraProvider
        verticesConfig={vertices}
        edgesConfig={edges}>
        <Edges />
        <Vertices />
        <Controls options={Object.keys(vertices)} />
      </DijkstraProvider>
    </RecoilRoot>
  </div>
);

export default App;
