/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  index: number;
  restart: number;
  handleClick: (
    setContent: React.Dispatch<React.SetStateAction<string>>,
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
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
    <td
      data-index={index}
      css={style}
      onClick={(event) => handleClick(setContent, event)}
    >
      {content}
    </td>
  );
};

export default Cell;
