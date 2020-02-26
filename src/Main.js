import React from 'react'
import styled from 'styled-components'
import WorkExperience from 'containers/WorkExperience'
import Education from 'containers/Education'
import Presentation from 'containers/Presentation'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  flex-grow: 1;
`

const Main = () => (
  <MainContainer>
    <Presentation />
    <WorkExperience />
    <Education />
  </MainContainer>
)

export default Main
