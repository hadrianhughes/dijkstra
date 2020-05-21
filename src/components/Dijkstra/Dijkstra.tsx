import React from 'react';

export const DijkstraContext = React.createContext(null);

interface PropTypes {
  children: React.ReactNode;
}

const DijkstraProvider = ({ children }: PropTypes) => {
  return (
    <DijkstraContext.Provider value={null}>
      {children}
    </DijkstraContext.Provider>
  );
};

export default DijkstraProvider;
