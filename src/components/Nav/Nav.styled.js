import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  gap: 27px;
  bottom: 90%;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    position: static;
    margin-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;

  color: rgba(94, 83, 67, 0.5);
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: #5e5343;
    text-decoration: underline;
  }

  & :hover,
  :focus {
    color: #5e5343;
  }
`;
