import styled from "styled-components";

export const StyledItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100px; */
  height: 130px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  overflow: hidden;
  padding: 10px;
  border: 1px solid transparent;

  transition: border 250ms ease, box-shadow 250ms ease;

  & img {
    display: block;
    height: calc(100% - 10px);
    transition: transform 250ms ease;
  }

  &:hover {
    border: 1px solid #5e5343;
    /* box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19); */
  }

  &:focus {
    border: 2px solid #5e5343;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.24), 0 5px 5px 0 rgba(0, 0, 0, 0.19);
    /* background-color: #efe9e4; */
    & img {
      transform: scale(1.15);
    }
    /* padding: 5px; */
  }
`;
