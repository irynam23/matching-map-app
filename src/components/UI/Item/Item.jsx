import { React } from "react";
import { StyledItem } from "./Item.styled";
export const Item = ({ children, onClick }) => {
  return <StyledItem onClick={onClick}>{children}</StyledItem>;
};
