import React, { Fragment } from 'react'
import styled from 'styled-components'
import portrait from 'assets/images/patrik-nilsson.jpg'
import { Indented, Purple, BlueGrey, Orange } from 'shared/styles'

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  width: 250px;
  background: #001122;
`

const SidebarSection = styled.div`
  padding: 0 20px;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
  margin-bottom: 15px;
`

const PortraitWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 50px 20px;
  box-sizing: border-box;
`

const Portrait = styled.img`
  width: 100%;
  border-radius: 50%;
  box-shadow: 0px 0px 29px -13px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`

const languages = ['Javascript', 'Typescript', 'HTML', 'CSS / SASS / LESS']
const skills = [
  'Redux',
  'Jest',
  'Enzyme',
  'Axios',
  'Jira',
  'Confluence',
  'Git',
  'Gerrit',
  'Azure Devops',
  'Scrum',
  'SAFe',
  'TDD',
  'CI/CD',
]

const DeveloperSection = () => (
  <SidebarSection>
    <Purple>const</Purple>
    <BlueGrey> developer</BlueGrey>
    <Purple> = {'{'}</Purple>
    <br />
    <Purple>&nbsp;&nbsp;name:</Purple> &apos;
    <Orange>Patrik Nilsson</Orange>&apos;<Purple>,</Purple>
    <br />
    <Purple>&nbsp;&nbsp;devType:</Purple> &apos;<Orange>Front End</Orange>
    &apos;<Purple>,</Purple>
    <br />
    <Purple>&nbsp;&nbsp;specialization:</Purple> &apos;
    <Orange>React</Orange>&apos;<Purple>,</Purple>
    <br />
    <Purple>&nbsp;&nbsp;homeTown:</Purple> &apos;
    <Orange>Gothenburg, Swe</Orange>&apos;<Purple>,</Purple>
    <br />
    <Purple>{'};'}</Purple>
  </SidebarSection>
)

const LanguagesSection = () => (
  <SidebarSection>
    <Purple>const</Purple>
    <BlueGrey> languages</BlueGrey>
    <Purple> = </Purple>
    {'['}
    <Indented>
      {languages.map(language => (
        <Fragment key={language}>
          &apos;<Orange>{language}</Orange>&apos;,{' '}
        </Fragment>
      ))}
    </Indented>
    {'];'}
  </SidebarSection>
)

const SkillsSection = () => (
  <SidebarSection>
    <Purple>const</Purple>
    <BlueGrey> skills</BlueGrey>
    <Purple> = </Purple>
    {'['}
    <Indented>
      {skills.map(skill => (
        <Fragment key={skill}>
          &apos;<Orange>{skill}</Orange>&apos;,{' '}
        </Fragment>
      ))}
    </Indented>
    {'];'}
  </SidebarSection>
)

const Sidebar = () => (
  <Wrapper>
    <PortraitWrapper>
      <Portrait alt="Patrik Nilsson Front End developer" src={portrait} />
    </PortraitWrapper>
    <DeveloperSection />
    <LanguagesSection />
    <SkillsSection />
  </Wrapper>
)

export default Sidebar
