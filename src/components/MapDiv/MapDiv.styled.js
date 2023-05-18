import styled from "styled-components";

export const StyledMapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & > div {
    transform: scale(0.6);
    @media screen and (min-width: 400px) {
      transform: scale(0.7);
    }

    @media screen and (min-width: 480px) {
      transform: scale(0.8);
    }

    @media screen and (min-width: 560px) {
      transform: scale(0.9);
    }

    @media screen and (min-width: 768px) {
      transform: scale(0.8);
    }
    @media screen and (min-width: 1024px) {
      transform: scale(0.9);
    }
    @media screen and (min-width: 1368px) {
      transform: scale(1);
    }
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
