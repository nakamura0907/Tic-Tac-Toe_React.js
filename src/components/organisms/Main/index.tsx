import React from 'react';

import Judge from 'containers/Judge';
import Board from 'containers/Board';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <Judge />
      <Board />
      <div className="main__options">options</div>
    </main>
  );
};
