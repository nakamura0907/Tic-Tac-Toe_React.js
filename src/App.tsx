import React from 'react'

import SEO from 'components/templates/SEO'
import GlobalStyle from 'components/templates/GlobalStyle'
import Layout from 'components/templates/Layout'

const App: React.FC = () => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Layout />
    </>
  )
}

export default App
