import styled from "styled-components";

export const StyledSelect = styled.div`
  border-radius: 30px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 12px;
  transition: border 250ms ease, background-color 250ms ease, color 250ms ease;
  ${({ isActive }) =>
    isActive
      ? "background-color: #efe9e4; color: #5e5343;"
      : "background-color: #5e5343; color: #efe9e4;"}

  &:hover {
    border: 1px solid #efe9e4;
  }

  &:focus {
    border: 1px solid #efe9e4;
    background-color: #efe9e4;
    color: #5e5343;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const StyledWrapper = styled.div`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 230px;
  }

  @media screen and (min-width: 1024px) {
    width: 521px;
  }
`;

export const StyledHeading = styled.h3`
  width: 300px;
  height: 90px;
  border-radius: 30px;
  background-color: #5e5343;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #efe9e4;
  gap: 6px;
  & svg {
    fill: #efe9e4;
  }

  @media screen and (min-width: 768px) {
    width: 230px;
  }

  @media screen and (min-width: 1024px) {
    width: 521px;
    font-size: 50px;
  }
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 12px;
  overflow-y: scroll;
  height: 200px;
  padding: 0 5px 7px 5px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 120px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 200px;
  }
`;

export const StyledItem = styled.button`
  width: 145.8px;
  height: 62.7px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  color: #efe9e4;
  background-color: #5e5343;
  font-size: 14px;
  text-align: center;
  transition: box-shadow 250ms ease, background-color 250ms ease,
    color 250ms ease;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
  }

  &:focus {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
    background-color: #efe9e4;
    color: #5e5343;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    width: 100px;
    height: 62.7px;
  }

  @media screen and (min-width: 1024px) {
    width: 145.8px;
    height: 62.7px;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  width: 275px;
`;
