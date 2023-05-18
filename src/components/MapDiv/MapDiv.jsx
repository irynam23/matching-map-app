import { React } from "react";

import { StyledMapDiv } from "./MapDiv.styled";
import regions from "./regionsOnMap";
import { Path } from "./Path";
// import { useWindowSize } from "../../hooks/useWindowSize";

export const MapDiv = ({ handleRegionClick }) => {
  const innerMap = regions.map((data) => (
    <Path
      key={data.id}
      pathData={data}
      onClick={() => handleRegionClick(data.id)}
    />
  ));
  return (
    <StyledMapDiv>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="body_1"
          width="500"
          height="335"
        >
          <g transform="matrix(0.5 0 0 0.5 0 0)">{innerMap}</g>
        </svg>
      </div>
    </StyledMapDiv>
  );
};
