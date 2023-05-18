import styled from "styled-components";

export const StyledWrapper = styled.div``;

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
    gap: 10px;
    padding-left: 5px;
    padding-top: 5px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-left: 25px;
    padding-top: 20px;
  }
`;
export const StyledItem = styled.button`
  width: 130px;
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
    width: 100px;
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    width: 200px;
    font-size: 16px;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  width: 275px;
`;
