import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  background: ${props => (props.secondary ? '#001e3d' : 'none')};
  @media (min-width: 1200px) {
    padding: 30px;
  }
`

export const Title = styled.h2`
  margin-top: 0;
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
