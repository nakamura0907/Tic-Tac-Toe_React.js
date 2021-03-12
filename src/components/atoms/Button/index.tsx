/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

export interface Props {
  className?: string;
  text: string;
  handleClick: () => void;
}

const Button: React.FC<Props> = ({ className, text, handleClick }) => {
  return (
    <button className={className} css={style} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
