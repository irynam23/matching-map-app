import styled from "styled-components";

export const StyledWrapper = styled.div`
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5e5343;
  padding: 15px;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const StyledHeading = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #efe9e4;
  font-size: 18px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
