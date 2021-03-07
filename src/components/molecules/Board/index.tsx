/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

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

  const handleClick = (
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
  ): void => {
    const element: HTMLTableDataCellElement = event.target as HTMLTableDataCellElement;
    if (element.textContent == '') {
      let index: number;
      let content: string;
      if (turnA == true) {
        index = 0;
        content = '○';
      } else {
        index = 1;
        content = '×';
      }
      // 得点の追加
      const clone = [...points];
      clone[index].push(
        (element.getAttribute('data-index') as unknown) as number,
      );
      setPoints(clone);
      // ○×の表示
      element.textContent = content;
      // 勝敗の判定(pointsの追加後に)
      // ターンの交代
      changeTurn();
    }
  };

  return (
    <table css={style}>
      <tbody>
        <tr>
          <td data-index="1" onClick={(event) => handleClick(event)}></td>
          <td data-index="2" onClick={(event) => handleClick(event)}></td>
          <td data-index="3" onClick={(event) => handleClick(event)}></td>
        </tr>
        <tr>
          <td data-index="4" onClick={(event) => handleClick(event)}></td>
          <td data-index="5" onClick={(event) => handleClick(event)}></td>
          <td data-index="6" onClick={(event) => handleClick(event)}></td>
        </tr>
        <tr>
          <td data-index="7" onClick={(event) => handleClick(event)}></td>
          <td data-index="8" onClick={(event) => handleClick(event)}></td>
          <td data-index="9" onClick={(event) => handleClick(event)}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
