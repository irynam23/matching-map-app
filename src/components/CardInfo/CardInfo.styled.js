import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const StyledMain = styled.h1`
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

export const StyledAlter = styled.div`
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

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    justify-content: baseline;
  }

  @media screen and (min-width: 1024px) {
    justify-content: baseline;
  }
`;

export const StyledInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.h3``;

export const StyledName = styled.h2``;

export const StyledInfoMedia = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const StyledWriters = styled.div`
  margin-top: 10px;
  & h3 {
    margin-bottom: 10px;
  }
  & p {
    margin: 0;
    font-size: 12px;

    @media screen and (min-width: 768px) {
      font-size: 10px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 16px;
      padding: 20px;
    }
  }
`;

export const StyledInfoPerson = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const StyledPersonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-right: 10px;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    padding-right: 0px;
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const StyledPerson = styled.div`
  padding: 10px;
  border: 1px solid brown;
`;

export const StyledTextPerson = styled.button`
  height: 65px;
  border-radius: 30px;
  cursor: pointer;
  color: #efe9e4;
  background-color: #5e5343;
  border: none;
  padding: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: box-shadow 250ms ease, background-color 250ms ease,
    color 250ms ease;

  ${({ isActive }) =>
    isActive
      ? `background-color: #efe9e4; color: #5e5343;  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24),
      0 12px 16px 0 rgba(0, 0, 0, 0.19);`
      : "background-color: #5e5343; color: #efe9e4;"}

  :hover {
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24),
      0 12px 16px 0 rgba(0, 0, 0, 0.19);
  }

  &:focus {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
    background-color: #efe9e4;
    color: #5e5343;
  }
  & svg {
    fill: #efe9e4;
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    padding: 20px;
  }
`;

export const StyledInfoBox = styled.div`
  padding: 20px;
  border: 1px solid brown;
  border-radius: 30px;
`;

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 160px; */
  border-radius: 30px;
  border: none;
  background-color: transparent;
  overflow: hidden;
  padding: 10px;
  border: 1px solid transparent;

  & img {
    border-radius: 22px;
    display: block;
    width: 136px;
    height: auto;
  }
`;

export const StyledCoat = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  border-radius: 30px;
  border: none;
  background-color: transparent;
  overflow: hidden;
  padding: 10px;
  border: 1px solid transparent;

  & img {
    display: block;
    height: calc(100% - 10px);
    transition: transform 250ms ease;
  }
`;

export const StyledAbout = styled.ul`
  font-size: 12px;
  margin: 0;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  & li {
    list-style: circle;
    font-weight: 700;
  }
`;
