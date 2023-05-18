import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledWrapper } from "./Homepage.styled";

import { MapDiv } from "../../components/MapDiv/MapDiv";
import { Modal } from "../../components/Modal/Modal";

export const Homepage = ({ selected }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleRegionClick = (id) => {
    if (!selectedOption) return;

    if (selectedOption === id) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setShowModal(true);
  };

  return (
    <StyledWrapper>
      <MapDiv handleRegionClick={handleRegionClick} />
      {showModal && (
        <Modal
          correct={correct}
          toggleModal={() => setShowModal((prev) => !prev)}
          setShowModal={setShowModal}
        />
      )}
      <Outlet context={{ setSelectedOption }} />
    </StyledWrapper>
  );
};
