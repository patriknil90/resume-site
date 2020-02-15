import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  background: #c2c6c0;
  font-family: Roboto, sans-serif;
`

const App = () => (
  <Container>
    <Sidebar />
  </Container>
)

export default App
