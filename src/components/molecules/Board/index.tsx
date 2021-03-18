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
   * @param index
   * @param content
   * @param setContent  引数に渡した内容をセルに表示する
   */
  const handleClick = (
    index: number,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
  ): void => {
    if (content == '' && won == false) {
      const i: number = turnA ? 0 : 1;
      setContent(turnA ? '○' : '×');
      // 得点の追加
      const clone = JSON.parse(JSON.stringify(points));
      clone[i].push(index);
      setPoints(clone);
      // 勝敗の判定
      checkWon(clone[i]);
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

    if (result) {
      // 勝者決定
      changeWon();
      // スコアの更新
    } else {
      // ターンの交代
      changeTurn();
    }
  };

  /**
   *  セルを横一列*3出力する
   *
   * @returns EmotionJSX.Element[]
   */

  const renderBoard = () => {
    return new Array(3).fill(0).map((item, index) => {
      const key = index * 3; // 0~2 * 3
      return (
        <tr key={key}>
          <Cell index={key} restart={restart} handleClick={handleClick} />
          <Cell index={key + 1} restart={restart} handleClick={handleClick} />
          <Cell index={key + 2} restart={restart} handleClick={handleClick} />
        </tr>
      );
    });
  };

  return (
    <table css={style}>
      <tbody>{renderBoard()}</tbody>
    </table>
  );
};

export default Board;
