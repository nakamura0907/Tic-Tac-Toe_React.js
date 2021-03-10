/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

import Cell from 'components/atoms/Cell';
import rules from './rules';

interface Props {
  restart: number;
  turnA: boolean;
  won: boolean;
  changeTurn: () => void;
  changeWon: () => void;
}

interface State {
  points: number[][];
}

const initialState: State = {
  points: [[], []],
};

const Board: React.FC<Props> = ({
  restart,
  turnA,
  won,
  changeTurn,
  changeWon,
}) => {
  const [points, setPoints] = React.useState(initialState.points);

  React.useEffect(() => {
    if (0 < restart) {
      setPoints(initialState.points);
    }
  }, [restart]);

  /**
   * 各セルをクリックで発火する
   *
   * @param setContent  引数に渡した内容をセルに表示する
   * @param event event
   */
  const handleClick = (
    setContent: React.Dispatch<React.SetStateAction<string>>,
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
  ): void => {
    const element: HTMLTableDataCellElement = event.target as HTMLTableDataCellElement;

    if (element.textContent == '' && won == false) {
      let index: number;
      if (turnA == true) {
        index = 0;
        setContent('○');
      } else {
        index = 1;
        setContent('×');
      }
      // 得点の追加
      const clone = JSON.parse(JSON.stringify(points));
      clone[index].push(Number(element.getAttribute('data-index')));
      setPoints(clone);
      // 勝敗の判定
      checkWon(clone[index]);
    }
  };

  /**
   * 勝利条件を満たしているか？
   *  yes -> 勝者決定
   *  no -> 次のターンへ
   *
   * @param point プレイヤーの得点
   */
  const checkWon = (point: number[]) => {
    const result = rules.some((array) => {
      return array.every((value) => {
        return point.includes(value);
      });
    });

    if (result == true) {
      // 勝者決定
      changeWon();
    } else {
      // ターンの交代
      changeTurn();
    }
  };

  /**
   *  セルを横一列*3出力する
   *
   * @returns React.ClassAttributes<HTMLTableRowElement>[]
   */

  const createBoard = () => {
    const items: React.ClassAttributes<HTMLTableRowElement>[] = [];
    for (let i = 1; i <= 9; i += 3) {
      items.push(
        <tr key={i}>
          <Cell index={i} restart={restart} handleClick={handleClick} />
          <Cell index={i + 1} restart={restart} handleClick={handleClick} />
          <Cell index={i + 2} restart={restart} handleClick={handleClick} />
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
