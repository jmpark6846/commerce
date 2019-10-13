import styled from "styled-components";
import theme from "../../theme";

interface Props {
  
}

const Input = styled.input`
  border: 1px solid ${theme.color.gray};
  border-radius: 4px;
  background-color: ${theme.color.background};
  height: 45px;
  align-content: center;
  display:flex;
  outline: none;
  padding: 0 13px;
  width: 100%;

  ::placeholder{
    color: ${theme.color.gray};
  }
`

export default Input
