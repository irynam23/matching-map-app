import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledWrapper, StyledMapDiv } from "./Map.styled";
import regions from "./regionsOnMap";
import { Path } from "./comp";
import { Modal } from "../Modal/Modal";
// import { useWindowSize } from "hooks/useWindowSize";

export const Map = ({ selected }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [correct, setCorrect] = useState(false);

  // const { isMobile } = useWindowSize();
  return (
    <StyledWrapper>
      <StyledMapDiv>
        <div>
          <svg
            height="670"
            width="1000"
            version="1.2"
            viewBox="0 0 1000 670"
            xmlns="http://www.w3.org/2000/svg"
          >
            {regions.map((data) => (
              <Path
                key={data.id}
                pathData={data}
                onClick={() => {
                  if (selectedOption === data.id) {
                    setCorrect(true);
                  } else {
                    setCorrect(false);
                  }
                  setShowModal(true);
                }}
              />
            ))}

            <circle cx="306.4" cy="364.1" id="0"></circle>
            <circle cx="538.5" cy="370.9" id="1"></circle>
            <circle cx="77.6" cy="251.3" id="2"></circle>
          </svg>
        </div>
      </StyledMapDiv>
      {showModal && (
        <Modal
          correct={correct}
          toggleModal={() => setShowModal((prev) => !prev)}
        />
      )}
      <Outlet context={{ setSelectedOption }} />
    </StyledWrapper>
  );
};
