import React from 'react'
import styled from 'styled-components'
import portrait from './assets/images/patrik-nilsson.jpg'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 250px;
  background: #001122;
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
`

const Section = styled.div`
  padding: 0 20px;
  text-align: center;
`

const WorkerWrapper = styled.p`
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
`

const Purple = styled.span`
  color: #be69d3;
`

const BlueGrey = styled.span`
  color: #786ae2;
`

const Orange = styled.span`
  color: #d6ae68;
`

const Sidebar = () => {
  return (
    <Wrapper>
      <PortraitWrapper>
        <Portrait alt="Patrik Nilsson Front End developer" src={portrait} />
      </PortraitWrapper>
      <Section>
        <WorkerWrapper>
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
          <Purple>{'}'}</Purple>
        </WorkerWrapper>
      </Section>
    </Wrapper>
  )
}

export default Sidebar
