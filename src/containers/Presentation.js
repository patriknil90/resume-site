import React from 'react'
import { Container, Title, Link, Paragraph } from 'shared/styles'

const Presentation = () => (
  <Container secondary>
    <Title big>Hello, I&apos;m Patrik</Title>
    <Paragraph>
      And I build web applications! I have mainly worked with developing
      enterprise and B2B applications. From this I&apos;ve gained specialized
      knowledge and experience in JavaScript programming, Data management
      platforms, data analytics systems and development of Single Page
      Applications. With an educational background in Systems Science, and as a
      former independent developer, I have also learned to take a holistic
      approach trying to find solutions that truly bring business value.
    </Paragraph>
    <Paragraph>
      If you would like to connect with me, feel free to add me on{' '}
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
