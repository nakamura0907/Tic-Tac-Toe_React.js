/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  className?: string;
  text: string;
}

const Copyright: React.FC<Props> = ({ className, text }) => {
  return (
    <small className={className || 'footer__copyright'} css={style}>
      {text}
    </small>
  );
};

export default Copyright;
