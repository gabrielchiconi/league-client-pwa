import React from 'react'
import { GlobalStyle } from './global/GlobalStyle'
import { Header } from './global/Header'

export function App (): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}
