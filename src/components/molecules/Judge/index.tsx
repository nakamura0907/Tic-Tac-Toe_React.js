/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

import Button from 'components/atoms/Button';

interface Props {
  turnA: boolean;
  won: boolean;
  newGame: () => void;
}

interface State {
  text: string;
}

const initialState: State = {
  text: '',
};

const Judge: React.FC<Props> = ({ turnA, won, newGame }) => {
  const [text, setText] = React.useState(initialState.text);
  React.useEffect(() => {
    if (won == false) {
      if (turnA == true) {
        setText('プレイヤーAのターンです');
      } else {
        setText('プレイヤーBのターンです');
      }
    } else {
      if (turnA == true) {
        setText('プレイヤーAの勝ちです');
      } else {
        setText('プレイヤーBの勝ちです');
      }
    }
  }, [turnA, won]);

  return (
    <div css={style} className="judge">
      <p className="judge__text">{text}</p>
      <Button className="judge__button" handleClick={newGame} text="New Game" />
    </div>
  );
};

export default Judge;
