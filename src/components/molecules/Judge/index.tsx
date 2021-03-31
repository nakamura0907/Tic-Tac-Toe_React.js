/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

import Button from 'components/atoms/Button';

interface Props {
  turn: 'playerA' | 'playerB';
  won: boolean;
  newGame: () => void;
}

interface State {
  text: string;
}

const initialState: State = {
  text: '',
};

const Judge: React.FC<Props> = ({ turn, won, newGame }) => {
  const [text, setText] = React.useState(initialState.text);
  React.useEffect(() => {
    if (turn === 'playerA') {
      setText(won ? 'プレイヤーAの勝ちです' : 'プレイヤーAのターンです');
    } else {
      setText(won ? 'プレイヤーBの勝ちです' : 'プレイヤーBのターンです');
    }
  }, [turn, won]);

  return (
    <div css={style} className="judge">
      <p className="judge__text">{text}</p>
      <Button className="judge__button" handleClick={newGame} text="New Game" />
    </div>
  );
};

export default Judge;
