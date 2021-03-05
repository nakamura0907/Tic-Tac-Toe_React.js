import React from 'react'
import Helmet from 'react-helmet'

/**
 * Warning: Unsafe lifecycle methods were found within a strict-mode tree:
 * componentWillMount: Please update the following components to use componentDidMount instead: SideEffect(NullComponent)
 */

const SEO: React.FC = () => {
  return (
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>Tic Tac Toe</title>
      <meta
        name="description"
        content="React.js+TypeScriptで作成したTic Tac Toeです。"
      />
    </Helmet>
  )
}

export default SEO
