import React from 'react'
import styled from 'styled-components'
import WorkExperience from 'containers/WorkExperience'
import Education from 'containers/Education'
import Presentation from 'containers/Presentation'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;

  @media (min-width: ${props => props.flexBreakPoint}) {
    flex-direction: row;
    height: 100%;
    overflow-y: auto;
    flex-grow: 1;
  }
`

const Main = ({ flexBreakPoint }) => (
  <MainContainer flexBreakPoint={flexBreakPoint}>
    <Presentation />
    <WorkExperience />
    <Education />
  </MainContainer>
)

export default Main
