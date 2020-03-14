import React from 'react'
import styled from 'styled-components'
import Sidebar from 'components/Sidebar'
import Main from './Main'

const flexBreakPoint = '600px'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  margin: 0;
  box-sizing: border-box;
  background: #001428;
  color: #bababa;
  font-family: Inconsolata, monospace;
  display: flex;
  flex-direction: column;

  @media (min-width: ${flexBreakPoint}) {
    flex-direction: row;
  }
`

const App = () => (
  <AppContainer>
    <Sidebar flexBreakPoint={flexBreakPoint} />
    <Main />
  </AppContainer>
)

export default App
