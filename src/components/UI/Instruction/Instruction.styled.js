import styled from "styled-components";

export const StyledText = styled.p`
  font-size: 16px;
  width: 275px;
  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 12px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 275px;
    font-size: 16px;
  }
`;
