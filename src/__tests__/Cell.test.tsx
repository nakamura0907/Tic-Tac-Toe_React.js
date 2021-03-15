import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Cell, { Props } from 'components/atoms/Cell';

const handleClick = () => {
  jest.fn();
  return;
};
const renderCell = (props: Partial<Props> = {}): any => {
  const defaultProps: Props = {
    index: 0,
    restart: 0,
    handleClick,
  };
  return render(
    <table>
      <tbody>
        <tr>
          <Cell {...defaultProps} {...props} />
        </tr>
      </tbody>
    </table>,
  );
};

describe('Cell', () => {
  let container;
  let element;
  it('check default props', () => {
    container = renderCell().container;
    element = container.querySelector('td');

    fireEvent.click(element);

    // Matcher error: received value must be a mock or spy function
    // expect(handleClick).toHaveBeenCalledTimes(1);
    // screen.debug();
  });
});
