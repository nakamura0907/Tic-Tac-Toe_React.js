/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  index: number;
  restart: number;
  handleClick: (
    index: number,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
}

const Cell: React.FC<Props> = ({ index, restart, handleClick }) => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (0 < restart) {
      setContent('');
    }
  }, [restart]);

  return (
    <td css={style} onClick={() => handleClick(index, content, setContent)}>
      {content}
    </td>
  );
};

export default Cell;
