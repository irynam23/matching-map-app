import styled from "styled-components";

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
  grid-template-columns: 1fr;
  margin-top: 20px;
  gap: 16px;
  overflow-y: scroll;
  height: 180px;
  padding: 0 5px 7px 5px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    height: 200px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    height: 200px;
  }
`;

export const StyledItem = styled.button`
  /* width: 150px; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  overflow: hidden;
  padding: 10px;
  border: 1px solid transparent;
  transition: border 250ms ease, box-shadow 250ms ease, transform 250ms ease;

  & img {
    border-radius: 22px;
    display: block;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }

  &:hover {
    border: 1px solid #5e5343;
    /* box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19); */
  }

  &:focus {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
    border: 2px solid #5e5343;
    /* background-color: #efe9e4; */
    transform: scale(1.05);
    /* padding: 5px; */
  }

  @media screen and (min-width: 768px) {
    height: 160px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1368px) {
    height: 130px;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  width: 275px;
`;
