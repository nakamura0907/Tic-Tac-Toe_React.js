import React from 'react'

interface Props {
  className?: string
  text: string
}

const Copyright: React.FC<Props> = ({ className, text }) => {
  return <small className={className || 'footer__copyright'}>{text}</small>
}

export default Copyright
