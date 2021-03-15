/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  turnA: boolean;
  won: boolean;
}

interface State {
  count: number;
  list: string[];
  score: {
    playerA: number;
    playerB: number;
  };
}

const initialState: State = {
  count: 3,
  list: [],
  score: {
    playerA: 0,
    playerB: 0,
  },
};

const History: React.FC<Props> = ({ turnA, won }) => {
  const [count, setCount] = React.useState(initialState.count);
  const [score, setScore] = React.useState(initialState.score);
  const [list, setList] = React.useState(initialState.list);

  React.useEffect(() => {
    if (won) {
      setScore(
        turnA
          ? {
              ...score,
              playerA: score.playerA + 1,
            }
          : {
              ...score,
              playerB: score.playerB + 1,
            },
      );
      setList(turnA ? [...list, 'Aの勝ち'] : [...list, 'Bの勝ち']);
    }
  }, [won]);

  const renderList = () => {
    return new Array(list.length).fill(0).map((value, index) => {
      if (count < index + 1) {
        // break;
        return;
      }
      return <li key={index}>{list[list.length - index - 1]}</li>;
    });
  };

  const renderOption = () => {
    const options = [
      {
        value: 3,
        text: '3',
      },
      {
        value: 5,
        text: '5',
      },
      {
        value: 10,
        text: '10',
      },
      {
        value: 0,
        text: '表示しない',
      },
      {
        value: 99999,
        text: '全て',
      },
    ];
    return new Array(options.length).fill(0).map((value, index) => {
      return (
        <option key={index} value={options[index].value}>
          {options[index].text}
        </option>
      );
    });
  };

  return (
    <div className="history" css={style}>
      <h2>History</h2>
      <div className="history__score">
        {score.playerA} VS {score.playerB}
      </div>
      <div className="history__list">
        <label>
          表示件数:
          <select
            name="count"
            id="count"
            onChange={(e) => setCount(Number(e.target.value))}
          >
            {renderOption()}
          </select>
        </label>
        <ul>{renderList()}</ul>
      </div>
    </div>
  );
};

export default History;
