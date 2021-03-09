/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  turnA: boolean;
  won: boolean;
}

interface State {
  text: string;
}

const initialState: State = {
  text: '',
};

const Judge: React.FC<Props> = ({ turnA, won }) => {
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
  return <p css={style}>{text}</p>;
};

export default Judge;
