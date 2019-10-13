import styled from "styled-components";
import theme from "../../theme";

const Button = styled.button`
  border-radius: 4px;
  background-color: ${theme.color.primary};
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  outline:none;
  border: none;
  padding: 0px 13px;

  cursor: pointer;
`;

export default Button;
