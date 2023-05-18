import { React, useRef } from "react";
import { StyledItem } from "./FlagsList.styled";

import { useOutletContext } from "react-router-dom";

import { allFlags } from "./flags";
import { GridList, Heading, MainContainer } from "../UI";

const flags = allFlags;

export const FlagsList = () => {
  const { setSelectedOption } = useOutletContext();
  const btnRef = useRef(null);

  return (
    <MainContainer>
      <Heading>Flags</Heading>
      <GridList singleMobile>
        {flags.map(({ id, name }) => {
          return (
            <StyledItem
              btnRef={btnRef}
              key={id}
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
