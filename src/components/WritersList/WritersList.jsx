import { React, useState } from "react";

import { StyledSelect, StyledOption } from "./WritersList.styled";

import { useWindowSize } from "../../hooks/useWindowSize";

import { writersXXI } from "./WritersXXI";
import { writersXX } from "./WritersXX";
import { writersXIX } from "./WritersXIX";
import { writerspre } from "./Writerspre";
import { useOutletContext } from "react-router-dom";
import { GridList, Heading, Item, MainContainer } from "../UI";

const centuries = [
  { value: "xxi", text: "modern", writers: writersXXI },
  { value: "xx", text: "XX c.", writers: writersXX },
  { value: "xix", text: "XIX c.", writers: writersXIX },
  { value: "prexix", text: "pre XIX c.", writers: writerspre },
];

export const WritersList = () => {
  const { windowWidth } = useWindowSize();
  const { setSelectedOption } = useOutletContext();
  const [selected, setSelected] = useState(centuries[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const currentCentury = centuries.find(({ value }) => selected === value);

  return (
    <MainContainer>
      <Heading>
        {windowWidth >= 1400 && " Writers |"}
        <StyledSelect value={selected} onChange={handleChange}>
          {centuries.map((option) => (
            <StyledOption
              key={option.value}
              value={option.value}
              onClick={() => setSelected(option.value)}
              isActive={selected === option.value}
            >
              {option.text}
            </StyledOption>
          ))}
        </StyledSelect>
      </Heading>

      <GridList threeColumns>
        {currentCentury?.writers.map(({ id, surname }) => {
          return (
            <Item key={surname} onClick={() => setSelectedOption(id)}>
              {surname}
            </Item>
          );
        })}
      </GridList>
    </MainContainer>
  );
};
