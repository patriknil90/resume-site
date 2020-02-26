import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  margin: 0;
  box-sizing: border-box;
  background: #001428;
  color: #bababa;
  font-family: Inconsolata, monospace;
`

const App = () => (
  <Container>
    <Sidebar />
  </Container>
)

export default App
