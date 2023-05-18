import { React } from "react";
import { StyledItem } from "./CoatsList.styled";

import { useOutletContext } from "react-router-dom";

import { allCoats } from "./coats";
import { GridList, Heading, MainContainer } from "../UI";

const coats = allCoats;

export const CoatsList = () => {
  const { setSelectedOption } = useOutletContext();

  return (
    <MainContainer>
      <Heading>Coats Of Arms</Heading>
      <GridList threeColumns>
        {coats.map(({ id, name }) => {
          return (
            <StyledItem
              key={id}
              text={name}
              onClick={() => setSelectedOption(id)}
            >
              <img src={name} alt={name} />
            </StyledItem>
          );
        })}
      </GridList>
    </MainContainer>
  );
};
