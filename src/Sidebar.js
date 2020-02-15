import React from 'react'
import styled from 'styled-components'
import portrait from './assets/images/patrik-nilsson.jpg'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 300px;
  background: #b4bab2;
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

const Name = styled.h1`
  font-family: 'Handlee', Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
  font-weight: 100;
  line-height: 1.3;
  margin: 0 0 5px;
  color: #373e34;
`

const WorkTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  color: #525b4d;
`

const Sidebar = () => {
  return (
    <Wrapper>
      <PortraitWrapper>
        <Portrait alt="Patrik Nilsson Front End developer" src={portrait} />
      </PortraitWrapper>
      <Section>
        <Name>Patrik Nilsson</Name>
        <WorkTitle>Front End developer</WorkTitle>
      </Section>
    </Wrapper>
  )
}

export default Sidebar
