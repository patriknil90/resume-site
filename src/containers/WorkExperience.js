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
    workTitle: 'Front End developer consultant',
    employer: {
      company: 'Evry Sweden AB (A.K.A TietoEvry)',
      link: 'https://www.tietoevry.com/',
    },
    from: '2018-02',
    to: '2020-01',
    presentation: [
      'At Evry I have been assigned to a variety of projects and software management commitments, mainly as a Front End developer at global organizations within the manufacturing industry. As a consultant, my main goal is to bring value within my area of expertise (SPA development) and developing my ability to think high level of a project, product, an organization and end users. I have also focused on staying on top of the latest trends within web development and broadening my knowledge within other areas like toolchain and the implementation of CI/CD Pipelines.',
    ],
  },
  {
    workTitle: 'Front End developer',
    employer: { company: 'Vendium AB', link: 'https://www.struqtur.se/sv/' },
    from: '2016-06',
    to: '2018-02',
    presentation: [
      'The work consisted primarily of transforming a large-scale web-based business and project management system from a traditional MVC structure to a Single Page Application built with Angular (2+) and TypeScript. The application consists of a GUI, of which I had the responsibility to develop, and a GraphQL API that was consumed by the GUI.',
      'Vendium was at the time a startup with 3-5 employees and operational partners / co-owners. This required a high degree of responsibility, structure and transparency to help developing the product in the right direction efficiently.',
    ],
  },
  {
    workTitle: 'Web developer',
    employer: { company: 'Independent' },
    from: '2014-05',
    to: '2016-12',
    presentation: [
      'Working as an independent consultant for small businesses, helping them create informational websites about their company, products and services. The customers were both B2B and B2C oriented businesses operating in different business areas such as restaurant, software development, consulting etcetera. As I ran this as my own company, I also learned a lot about time estimating jobs and tasks, negotiaton, accounting etc.',
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
