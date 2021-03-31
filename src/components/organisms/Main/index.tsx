import React from 'react';

import Judge from 'containers/Judge';
import Board from 'containers/Board';
import History from 'containers/History';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <Judge />
      <Board />
      <History />
    </main>
  );
};
