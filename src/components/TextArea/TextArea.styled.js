import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) {
    width: 521px;
    font-size: 50px;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 15px;
`;

export const StyledText = styled.p`
  font-size: 12px;
  width: 170px;
  margin-top: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 14px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    font-size: 16px;
    margin-top: 40px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 30px;
  font-size: 13px;
  background-color: #5e5343;
  color: #ffffff;
  cursor: pointer;
  transition: box-shadow 250ms ease;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 60px;
    font-size: 14px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 155px;
    height: 61px;
    font-size: 16px;
    margin-top: 40px;
  }

  &:hover {
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24),
      0 8px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;
