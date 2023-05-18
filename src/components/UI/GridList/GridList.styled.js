import styled from "styled-components";

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: ${({ singleMobile }) =>
    singleMobile ? "1fr" : "1fr 1fr"};
  overflow-y: scroll;
  max-height: 220px;
  gap: 10px;

  margin-top: 15px;
  padding: 10px 25px 25px 25px;
  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1368px) {
    gap: 20px;
    grid-template-columns: ${({ threeColumns }) =>
      threeColumns ? "1fr 1fr 1fr" : "1fr 1fr"};
  }
`;
