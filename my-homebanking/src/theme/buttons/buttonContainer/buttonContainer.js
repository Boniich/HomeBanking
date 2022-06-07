import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "12px"};

  @media screen and (min-width: 744px) {
    flex-direction: ${(props) => props.flexDirection || "row"};
    justify-content: center;
    width: ${(props) => props.tableWidth || "408px"};
  }
`;
