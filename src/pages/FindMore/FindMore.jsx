import { React, useState } from "react";
import { StyledWrapper } from "./FindMore.styled";

import { MapDiv } from "../../components/MapDiv/MapDiv";

import { allCoats } from "../../components/Coats/coats";
import { allFlags } from "../../components/Flags/flags";
import { allRegions } from "../../components/RegionsList/regions";
import { writerspre } from "../../components/WritersList/Writerspre";
import { writersXIX } from "../../components/WritersList/WritersXIX";
import { writersXX } from "../../components/WritersList/WritersXX";
import { writersXXI } from "../../components/WritersList/WritersXXI";
import { CardInfo } from "../../components/CardInfo/CardInfo";

export const FindMore = () => {
  const [details, setDetails] = useState(null);

  const handleRegionClick = (id) => {
    const region = allRegions.find((item) => item.id === id)?.name;

    const flag = allFlags.find((item) => item.id === id)?.name;

    const coat = allCoats.find((item) => item.id === id)?.name;

    const writerpre = writerspre.filter((item) => item.id === id);

    const writerxix = writersXIX.filter((item) => item.id === id);

    const writerxx = writersXX.filter((item) => item.id === id);

    const writerxxi = writersXXI.filter((item) => item.id === id);

    setDetails({
      region,
      flag,
      coat,
      writerpre,
      writerxix,
      writerxx,
      writerxxi,
    });
  };

  return (
    <StyledWrapper>
      <MapDiv handleRegionClick={handleRegionClick} />
      {<CardInfo details={details} />}
    </StyledWrapper>
  );
};
