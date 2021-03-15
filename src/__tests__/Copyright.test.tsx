import React from 'react';
import { render, screen } from '@testing-library/react';

import Copyright, { Props } from 'components/atoms/Copyright';

const renderCopyright = (props: Partial<Props> = {}): any => {
  const defaultProps: Props = {
    text: 'Copyright',
  };
  return render(<Copyright {...defaultProps} {...props} />);
};

describe('Copyright', () => {
  let container;
  let element;
  it('check default props', () => {
    container = renderCopyright().container;
    element = container.querySelector('small');
    expect(element.textContent).toEqual('Copyright');
  });
  it('check text props', () => {
    container = renderCopyright({
      text: '&copy; Copyright',
    }).container;
    element = container.querySelector('small');
    expect(element.textContent).toEqual('&copy; Copyright');
  });
  it('check className props', () => {
    container = renderCopyright({
      className: 'footer__copyright',
    }).container;
    element = container.querySelector('small');
    expect(element.classList.contains('footer__copyright')).toBe(true);
  });
});
