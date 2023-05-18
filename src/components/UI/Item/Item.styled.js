import styled from "styled-components";

export const StyledItem = styled.button`
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
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    padding: 20px;
  }
`;
