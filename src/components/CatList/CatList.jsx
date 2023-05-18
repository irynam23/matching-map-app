import { React, createElement } from "react";

import { Heading, Instruction, Item, MainContainer, GridList } from "../UI";

import { RegionsList } from "../RegionsList/RegionsList";

import { useSearchParams } from "react-router-dom";
import { WritersList } from "../WritersList/WritersList";
import { FlagsList } from "../Flags/FlagsList";
import { CoatsList } from "../Coats/CoatsList";

const cat = {
  regions: RegionsList,
  writers: WritersList,
  flags: FlagsList,
  coats: CoatsList,
};

export const CatList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <MainContainer>
      {selectedCategory ? (
        createElement(cat[selectedCategory])
      ) : (
        <>
          <Heading>Choose the category:</Heading>
          <GridList>
            <Item onClick={() => setSearchParams({ category: "regions" })}>
              Regions
            </Item>
            <Item onClick={() => setSearchParams({ category: "writers" })}>
              Writers
            </Item>

            <Item onClick={() => setSearchParams({ category: "flags" })}>
              Flags
            </Item>
            <Item onClick={() => setSearchParams({ category: "coats" })}>
              Coats of Arms
            </Item>
          </GridList>
        </>
      )}
      <Instruction />
    </MainContainer>
  );
};
