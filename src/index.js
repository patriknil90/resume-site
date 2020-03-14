import React from 'react'
import { render } from 'react-dom'
import { GlobalStyles } from 'shared/styles'
import App from './App'

const AppRender = () => (
  <>
    <GlobalStyles />
    <App />
  </>
)

render(<AppRender />, document.getElementById('root'))
