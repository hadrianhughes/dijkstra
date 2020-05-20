import React from 'react';
import './App.css';
import Graph from './components/Graph';
import { RecoilRoot } from 'recoil';

const App = () => (
  <div className="App">
    <RecoilRoot>
      <Graph />
    </RecoilRoot>
  </div>
);

export default App;
