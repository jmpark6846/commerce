import styled from 'styled-components';

interface Props { 
  marginBottom: string
  marginTop: string
}
const Pane = styled.div<Props>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`

export default Pane