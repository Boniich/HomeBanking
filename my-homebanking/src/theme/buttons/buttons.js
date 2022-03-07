import styled from "styled-components";
import { primaryColor } from "../colors/colors";

// faltaria el disabled pero como el login inicia con eso
// no te estoy muy seguro de como hacerlo

const Button = styled.button`
  font-family: inherit;
  /* El width se cambia en el componente que se este utilizando */
  width: auto;
  height: 55px;
  background-color: ${primaryColor.primary500};
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${primaryColor.primary400};
  }

  &:focus {
    background-color: ${primaryColor.primary700};
  }
`;

export { Button };
