import React from 'react'
import { Container, Title, Link, Paragraph } from 'shared/styles'

const Presentation = () => (
  <Container secondary>
    <Title big>Hello, my name is Patrik!</Title>
    <Paragraph>
      I am a techy man in his thirties that likes to learn, regularly works out
      and thinks the Stock market is interesting. I also like to code! I have
      mainly worked with developing enterprise and B2B applications. From this
      I&apos;ve gained specialized knowledge and experience in programming
      Javascript. With an educational background in Systems Science, and as a
      former independent developer, I also try to take a hollistic approach
      trying to find solutions that truly bring business value.
    </Paragraph>
    <Paragraph>
      I am currently very happy with my work situation, getting the opportunity
      to develop big data and real time data analysis tools on a day to day
      basis. However, I am always open to getting to know new exiting people
      within the tech sector.
    </Paragraph>
    <Paragraph>
      If you would like to connect with me, don&apos;t hesitate to add me on{' '}
      <Link
        href="https://www.linkedin.com/in/patriknil90/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>{' '}
      or send me an <Link href="mailto:patriknil90@gmail.com">email</Link>.
    </Paragraph>
    <Paragraph>Best Regards, Patrik</Paragraph>
  </Container>
)

export default Presentation
