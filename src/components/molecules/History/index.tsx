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

  const createList = () => {
    const array: React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >[] = [];
    for (let i = 1; i <= list.length; i++) {
      array.push(<li key={i}>{list[list.length - i]}</li>);
      if (count <= i) {
        break;
      }
    }
    return array;
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
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="99999">全て</option>
          </select>
        </label>
        <ul>{createList()}</ul>
      </div>
    </div>
  );
};

export default History;
