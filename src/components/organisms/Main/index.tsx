import React from 'react';

import Board from 'containers/Board';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <div className="main__judge">judge</div>
      <Board />
      <div className="main__options">options</div>
    </main>
  );
};
