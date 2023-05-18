import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 20px;
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  padding: 20px;
  margin-top: 40px;
`;

export const StyledList = styled.ul`
  font-size: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledItem = styled.a`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 36px;
    height: 36px;
    fill: #5e5343;
  }
`;

export const StyledYoutube = styled.button`
  position: relative;
  border: none;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  & svg {
    width: 36px;
    height: 36px;
    fill: #5e5343;
  }
`;

export const StyledExpandedYoutube = styled.div`
  position: absolute;
  top: 100%;
  left: 0%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 0 0 20px;
`;
