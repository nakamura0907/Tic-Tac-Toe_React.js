import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button, { Props } from 'components/atoms/Button';

const renderButton = (props: Partial<Props> = {}): any => {
  const defaultProps: Props = {
    className: 'button',
    text: 'Click',
    handleClick() {
      jest.fn();
      return;
    },
  };
  return render(<Button {...defaultProps} {...props} />);
};

describe('Button', () => {
  let container;
  let element;

  test('check default props', () => {
    container = renderButton().container;
    element = container.querySelector('button');
    expect(element.classList.contains('button')).toBe(true);
    expect(element.textContent).toEqual('Click');

    fireEvent.click(element);
    // screen.debug();
  });

  test('check className props', () => {
    container = renderButton({
      className: 'firstClass secondClass',
    }).container;
    element = container.querySelector('button');
    expect(element.classList.contains('button')).toBe(false);
    expect(element.classList.contains('firstClass')).toBe(true);
    expect(element.classList.contains('secondClass')).toBe(true);

    // screen.debug();
  });

  test('check text props', () => {
    container = renderButton({
      text: 'Button Element',
    }).container;
    element = container.querySelector('button');
    expect(element.textContent).toEqual('Button Element');

    // screen.debug();
  });

  test('check handleClick props', () => {
    const handleClick = jest.fn();
    container = renderButton({
      handleClick: handleClick,
    }).container;
    element = container.querySelector('button');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);

    // screen.debug();
  });
});
