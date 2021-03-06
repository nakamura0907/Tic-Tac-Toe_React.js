import React from 'react'

import Copyright from 'components/atoms/Copyright'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Copyright text="&copy; Copyright Tic Tac Toe. All rights reserved." />
    </footer>
  )
}
