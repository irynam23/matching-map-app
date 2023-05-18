import styled from "styled-components";

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 10px;
  padding-top: 5px;

  @media screen and (min-width: 768px) {
    gap: 10px;
    padding-left: 5px;
    padding-top: 5px;
  }

  @media screen and (min-width: 1024px) {
    gap: 20px;
    padding-left: 25px;
    padding-top: 20px;
  }
`;
