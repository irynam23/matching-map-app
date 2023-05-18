import { React, useState } from "react";
import {
  StyledTitle,
  StyledSubtitle,
  StyledText,
  StyledButton,
} from "./TextArea.styled";
import { Navigate } from "react-router-dom";
import { MainContainer } from "../UI";

export const TextArea = () => {
  const [showCategories, setShowCategories] = useState(false);

  if (showCategories) {
    return <Navigate to="/categories" replace />;
  }
  return (
    <MainContainer>
      <StyledTitle>match it with the Ukrainian map</StyledTitle>
      <StyledSubtitle>how much do you know?</StyledSubtitle>
      <StyledText>
        Here you can practice and test your knowledge about Ukraine. Good luck!{" "}
      </StyledText>
      <StyledButton
        onClick={() => {
          setShowCategories(true);
        }}
      >
        <span>Start </span>
      </StyledButton>
    </MainContainer>
  );
};
