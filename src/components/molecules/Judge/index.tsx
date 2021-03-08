/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  turnA: boolean;
  winner: boolean;
}

interface State {
  text: string;
}

const initialState: State = {
  text: '',
};

const Judge: React.FC<Props> = ({ turnA, winner }) => {
  const [text, setText] = React.useState(initialState.text);
  React.useEffect(() => {
    if (winner == false) {
      if (turnA == true) {
        setText('プレイヤーAのターンです');
      } else {
        setText('プレイヤーBのターンです');
      }
    }
  }, [turnA, winner]);
  return <p css={style}>{text}</p>;
};

export default Judge;
