import { React } from "react";

import { useOutletContext } from "react-router-dom";
import { allRegions } from "./regions";
import { GridList, Heading, Item, MainContainer } from "../UI";

const regions = allRegions;

export const RegionsList = () => {
  const { setSelectedOption } = useOutletContext();

  return (
    <MainContainer>
      <Heading>Regions</Heading>
      <GridList threeColumns>
        {regions.map(({ id, name }) => {
          return (
            <Item key={id} text={name} onClick={() => setSelectedOption(id)}>
              {name}
            </Item>
          );
        })}
      </GridList>
    </MainContainer>
  );
};
