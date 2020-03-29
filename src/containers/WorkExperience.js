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

const experiences = [
  {
    workTitle: 'Front End developer',
    employer: {
      company: 'Icomera AB',
      link: 'https://www.icomera.com/',
    },
    from: '2020-01',
    to: 'Present',
    presentation: [
      "Working in a team that's responsible for the development of a number of Single Page applications built with React, mainly used for big data and real time data analysis. Icomera is the global leader in delivering mobile connectivity solutions for trains and buses. These applications are essential for both administrators at the customers and for hardware developers in-house at Icomera.",
    ],
  },
  {
    workTitle: 'Front End developer consultant',
    employer: {
      company: 'Evry Sweden AB (A.K.A TietoEvry)',
      link: 'https://www.tietoevry.com/',
    },
    from: '2018-02',
    to: '2020-01',
    presentation: [
      'At Evry I have been assigned to a variety of projects and software management commitments, mainly as a Front End developer. For approximately 18 months I consulted a Global car manufacturing company, developing a Data management solution within their autonomous vehicle segment. I worked in a cross functional team that developed and maintained both a REST API and a React application (whit my focus on the latter).',
    ],
  },
  {
    workTitle: 'Front End developer',
    employer: { company: 'Vendium AB', link: 'https://www.struqtur.se/sv/' },
    from: '2016-06',
    to: '2018-02',
    presentation: [
      'The work consisted primarily of transforming a large-scale web-based business and project management system from a traditional MVC structure to a Single Page Application built with Angular (2+) and TypeScript. The application consists of a GUI, of which I had the responsibility to develop, and a GraphQL API that was consumed by the GUI.',
      'Vendium was at the time a startup with only a handful employees. This required a high degree of responsibility, structure and transparency to help developing the product efficiently.',
    ],
  },
  {
    workTitle: 'Web developer',
    employer: { company: 'Independent' },
    from: '2014-05',
    to: '2016-12',
    presentation: [
      "Working as an independent consultant for small businesses, helping them create informational websites about their company, products and services. The customers were both B2B and B2C oriented businesses operating in different business areas such as restaurant, software development and consulting. As I ran this as my own company, I've also learned a lot about time estimating jobs and tasks, negotiatons, accounting etc.",
    ],
  },
]

const Experience = ({ workTitle, employer, from, to, presentation }) => (
  <ExperienceWrapper>
    <DescTitle>
      <Description>
        {`${workTitle} @ `}
        {employer.link ? (
          <Link href={employer.link} target="_blank" rel="noopener noreferrer">
            {employer.company}
          </Link>
        ) : (
          employer.company
        )}
      </Description>
      <Period>{`${from} to ${to}`}</Period>
    </DescTitle>
    {presentation.map(paragraph => (
      <Paragraph key={paragraph}>{paragraph}</Paragraph>
    ))}
  </ExperienceWrapper>
)

const WorkExperience = () => (
  <Container>
    <Title>Work Experience</Title>
    {experiences.map(experience => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Experience key={experience.from + experience.to} {...experience} />
    ))}
  </Container>
)

export default WorkExperience
