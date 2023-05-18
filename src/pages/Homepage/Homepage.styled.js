import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 70px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    padding-top: 100px;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  width: 521px;
`;

export const StyledText = styled.p`
  font-size: 16px;
  width: 275px;
`;
