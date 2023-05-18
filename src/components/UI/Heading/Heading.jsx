import { React } from "react";
import { StyledHeading, StyledWrapper } from "./Heading.styled";

export const Heading = ({ children, icon }) => {
  return (
    <StyledWrapper>
      <StyledHeading>{children}</StyledHeading>
    </StyledWrapper>
  );
};
