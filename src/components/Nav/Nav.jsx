import { React } from "react";
import { StyledWrapper, StyledLink } from "./Nav.styled";

export const Nav = () => {
  return (
    <StyledWrapper>
      <StyledLink to="/" end>
        Matching
      </StyledLink>
      <StyledLink to="/findmore">Find more</StyledLink>
      <StyledLink to="/aboutme">About me</StyledLink>
    </StyledWrapper>
  );
};
