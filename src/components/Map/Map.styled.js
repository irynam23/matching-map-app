import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledMapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (min-width: 768px) {
    width: 70vw;
  }

  @media screen and (min-width: 1024px) {
    width: 50vw;
  }

  & div {
    transform: scale(50%);
  }
  & path {
    fill: #efe9e4;
    stroke: black;
    stroke-width: 2px;
    transition: stroke 0.3s;
    cursor: pointer;
  }

  & :hover {
    fill: yellow;
  }
`;
