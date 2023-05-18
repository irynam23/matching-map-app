import { StyledList } from "./GridList.styled";

export const GridList = ({ children, threeColumns, singleMobile }) => {
  return (
    <StyledList threeColumns={threeColumns} singleMobile={singleMobile}>
      {children}
    </StyledList>
  );
};
