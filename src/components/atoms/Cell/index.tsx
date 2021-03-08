/** @jsxImportSource @emotion/react */

import React from 'react';
import style from './style';

interface Props {
  index: number;
  turnA: boolean;
  handleClick: (element: HTMLTableDataCellElement) => void;
}

const Cell: React.FC<Props> = ({ index, turnA, handleClick }) => {
  const [content, setContent] = React.useState('');

  const clickCell = (
    event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
  ) => {
    const element: HTMLTableDataCellElement = event.target as HTMLTableDataCellElement;
    if (element.textContent == '') {
      handleClick(element);
      if (turnA == true) {
        setContent('○');
      } else {
        setContent('×');
      }
    }
  };
  return (
    <td data-index={index} css={style} onClick={(event) => clickCell(event)}>
      {content}
    </td>
  );
};

export default Cell;
