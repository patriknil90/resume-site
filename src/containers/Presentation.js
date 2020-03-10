import React from 'react'
import { Container, Title, Link } from 'shared/styles'

const Presentation = () => (
  <Container>
    <Title big>Hello, my name is Patrik!</Title>
    <p>
      My name is Patrik and I am a Frontend developer who have mainly worked
      with enterprise and B2B applications. As a programmer I want to get deeper
      skills in the field of frontend development and slowly take steps in other
      areas, such as serverless functions and management of data in the cloud.
      <br />
      <br />
      In a team I want to bring a mix of stability, effectiveness and curiosity.
      That is, I want to help my team deliver good quality code, try to identify
      and cut out things that holds the team back or do not help in delivering
      value and also advocate to try new things.
      <br />
      <br />
      In my spare time I like to work out, take walks and eat good food. I also
      listen to a lot of different podcasts and take a huge interest in the
      stock market.
      <br />
      <br />
      If you would like to connect with me, don&apos;t hesitate to add me on{' '}
      <Link
        href="https://www.linkedin.com/in/patriknil90/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>{' '}
      or send me an <Link href="mailto:patriknil90@gmail.com">email</Link>.
      <br />
      <br />
      Best Regards, Patrik
    </p>
  </Container>
)

export default Presentation
