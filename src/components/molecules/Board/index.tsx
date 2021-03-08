/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

import Cell from 'components/atoms/Cell';

interface Props {
  turnA: boolean;
  changeTurn: () => void;
}

interface State {
  points: number[][];
}

const initialState: State = {
  points: [[], []],
};

const Board: React.FC<Props> = ({ turnA, changeTurn }) => {
  const [points, setPoints] = React.useState(initialState.points);

  const handleClick = (element: HTMLTableDataCellElement): void => {
    let index: number;
    if (turnA == true) {
      index = 0;
    } else {
      index = 1;
    }
    // 得点の追加
    const clone = JSON.parse(JSON.stringify(points));
    clone[index].push(
      (element.getAttribute('data-index') as unknown) as number,
    );
    setPoints(clone);
    // 勝敗の判定(pointsの追加後に)
    // ターンの交代
    changeTurn();
  };

  const createBoard = () => {
    const items: React.ClassAttributes<HTMLTableRowElement>[] = [];
    for (let i = 1; i <= 9; i += 3) {
      items.push(
        <tr key={i}>
          <Cell index={i} turnA={turnA} handleClick={handleClick} />
          <Cell index={i + 1} turnA={turnA} handleClick={handleClick} />
          <Cell index={i + 2} turnA={turnA} handleClick={handleClick} />
        </tr>,
      );
    }
    return items;
  };

  return (
    <table css={style}>
      <tbody>{createBoard()}</tbody>
    </table>
  );
};

export default Board;
