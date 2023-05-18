import styled from "styled-components";

// export const StyledWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 100px;
//   padding: 60px 20px;
// `;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 70px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    padding-top: 100px;
  }
`;
