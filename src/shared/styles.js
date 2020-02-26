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

export const Indented = styled.div`
  padding-left: 15px;
`

export const Purple = styled.span`
  color: #be69d3;
`

export const BlueGrey = styled.span`
  color: #786ae2;
`

export const Orange = styled.span`
  color: #d6ae68;
`
