import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  padding: 15px;
  box-sizing: border-box;
  background: ${props => (props.secondary ? '#001b36' : 'none')};
  @media (min-width: 1200px) {
    padding: 30px;
  }
`

export const Title = styled.h2`
  margin-top: 0;
  color: #9d9d9d;
  font-weight: 100;
  font-size: ${props => (props.big ? '26px' : '18px')};

  @media (min-width: 767px) {
    font-size: ${props => (props.big ? '30px' : '24px')};
  }
`

const COLORS = {
  purple: '#be69d3',
  blueGrey: '#786ae2',
  orange: '#d6ae68',
}

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
