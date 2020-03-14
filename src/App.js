import React from 'react'
import styled from 'styled-components'
import Sidebar from 'components/Sidebar'
import Main from './Main'

const flexBreakPoint = '600px'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow-y: auto;
  box-sizing: border-box;
  background: #001428;
  color: #bababa;
  font-family: Inconsolata, monospace;
  display: flex;
  flex-direction: column;

  @media (min-width: ${flexBreakPoint}) {
    flex-direction: row;
    overflow-y: hidden;
  }
`

const App = () => (
  <AppContainer>
    <Sidebar flexBreakPoint={flexBreakPoint} />
    <Main flexBreakPoint={flexBreakPoint} />
  </AppContainer>
)

export default App
