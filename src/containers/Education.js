import React from 'react'
import {
  Container,
  Title,
  DescTitle,
  Description,
  Period,
  Paragraph,
  ExperienceWrapper,
  Link,
} from 'shared/styles'
import styled from 'styled-components'

const educationList = [
  {
    title: 'In-depth training on agile working methods',
    description: 'Intensive course, total 10 hours',
    focusPoints: [
      'Advantages and disadvantages to other methodologies.',
      'How to adapt working methods according to the unique prerequisites of a project and a team.',
      'What is value and how do we achieve effective value creation?',
      'Workshops and practical training.',
    ],
    period: '2019-02',
  },
  {
    title: 'Elasticsearch basics - Findwise, Gothenburg',
    description: 'Full day course',
    focusPoints: [
      'For software developers',
      'Lectures, work shops and practical training',
      'Elasticsearch',
      'Kibana',
    ],
    period: '2018-08',
  },
  {
    title: 'Bachelor in Systems Science - University of Gothenburg',
    description:
      "The program aims to give knowledge about IT and how to think about IT in regards of implementation in organizations and how it is to be used by people. My key takeaways from three years in the program is a fundamental ground in object oriented programming, modelling and the practical implementation of these models and how to broadly and deeply incorporate IT in organizations. I've also made contact with lots of great people that I wouldn't otherwise which I'm thankful for.",
    period: '2013-09 - 2016-06',
  },
]

const FocusList = styled.ul`
  list-style: disc;
  padding-left: 15px;
`

const EducationSection = ({ title, description, focusPoints, period }) => (
  <ExperienceWrapper>
    <DescTitle>
      <Description>{title}</Description>
      <Period>{period}</Period>
    </DescTitle>
    <Paragraph style={{ marginBottom: '10px' }}>{description}</Paragraph>
    {focusPoints ? (
      <FocusList>
        {focusPoints.map(focusPoint => (
          <li key={focusPoint}>{focusPoint}</li>
        ))}
      </FocusList>
    ) : null}
  </ExperienceWrapper>
)

const Education = () => (
  <Container secondary>
    <Title>Education</Title>
    {educationList.map(education => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <EducationSection key={education.title} {...education} />
    ))}
  </Container>
)

export default Education
