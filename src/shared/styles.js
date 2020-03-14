import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export const Container = styled.div`
  margin: auto;
  padding: 30px;
  box-sizing: border-box;
  background: ${props => (props.secondary ? '#001b36' : 'none')};
`

const COLORS = {
  text: '#9d9d9d',
  textLight: '#c6c6c6',
  purple: '#be69d3',
  blueGrey: '#786ae2',
  orange: '#d6ae68',
}

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  color: ${COLORS.textLight};
  font-weight: 100;
  font-size: ${props => (props.big ? '28px' : '24px')};

  @media (min-width: 767px) {
    font-size: ${props => (props.big ? '32px' : '26px')};
  }
`

export const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.5;
`

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: ${COLORS.purple};
`

export const Indented = styled.div`
  padding-left: 15px;
`

export const Purple = styled.span`
  color: ${COLORS.purple};
`

export const BlueGrey = styled.span`
  color: ${COLORS.blueGrey};
`

export const Orange = styled.span`
  color: ${COLORS.orange};
`

export const DescTitle = styled.h3`
  color: ${COLORS.textLight};
  line-height: 1.5;
  margin-bottom: 10px;
`

export const Description = styled.span`
  font-weight: 600;
  display: block;
  @media (min-width: 767px) {
    display: inline-block;
    margin-right: 10px;
  }
`

export const Period = styled.span`
  font-weight: 100;
  display: block;
  @media (min-width: 767px) {
    display: inline-block;
  }
`

export const ExperienceWrapper = styled.div`
  margin-bottom: 30px;
`
