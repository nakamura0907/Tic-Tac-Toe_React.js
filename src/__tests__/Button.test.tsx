import React from 'react';
import { render, screen } from '@testing-library/react';

import Button, { Props } from '../components/atoms/Button/index';

const renderButton = (props: Partial<Props> = {}): any => {
  const defaultProps: Props = {
    className: 'button',
    text: 'Click',
    handleClick() {
      return;
    },
  };
  return render(<Button {...defaultProps} {...props} />);
};

describe('Button', () => {
  test('check className props', () => {
    renderButton();
    // screen.debug();

    renderButton({
      className: 'test',
    });
    // screen.debug();

    renderButton({
      className: 'test test2',
    });
    // screen.debug();
  });
});
