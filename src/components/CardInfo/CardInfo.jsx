import { React, useState } from "react";
import {
  StyledTitle,
  StyledText,
  StyledInfoItem,
  StyledName,
  StyledFlag,
  StyledCoat,
  StyledInfoMedia,
  StyledInfoPerson,
  StyledInfoBox,
  StyledAlter,
  StyledMain,
  StyledSubtitle,
  StyledPersonBox,
  StyledAbout,
  StyledTextPerson,
  StyledWriters,
} from "./CardInfo.styled";
import { MainContainer } from "../UI";

export const CardInfo = ({ details }) => {
  const [selected, setSelected] = useState("writerxxi");
  const noWriters =
    !details?.writerpre.length &&
    !details?.writerxix.length &&
    !details?.writerxx.length &&
    !details?.writerxxi.length;
  const chosenInfo = (
    <>
      <StyledTitle>
        <StyledText>Name of the region:</StyledText>
        <StyledName>{details?.region}</StyledName>
      </StyledTitle>
      <StyledInfoMedia>
        <StyledInfoItem>
          <StyledText>Flag:</StyledText>
          <StyledFlag>
            <img src={details?.flag} alt={details?.flag} />
          </StyledFlag>
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledText>Coat of Arms:</StyledText>
          <StyledCoat>
            <img src={details?.coat} alt={details?.coat} />
          </StyledCoat>
        </StyledInfoItem>
      </StyledInfoMedia>
      <StyledWriters>
        <StyledText>Writers:</StyledText>
        {noWriters ? (
          <p>No information yet</p>
        ) : (
          <StyledPersonBox>
            <StyledInfoPerson>
              <StyledTextPerson
                onClick={() => setSelected("writerpre")}
                isActive={selected === "writerpre"}
              >
                Pre XIX c.
              </StyledTextPerson>

              <StyledTextPerson
                onClick={() => setSelected("writerxix")}
                isActive={selected === "writerxix"}
              >
                XIX c.
              </StyledTextPerson>

              <StyledTextPerson
                onClick={() => setSelected("writerxx")}
                isActive={selected === "writerxx"}
              >
                XX c.
              </StyledTextPerson>
              <StyledTextPerson
                onClick={() => setSelected("writerxxi")}
                isActive={selected === "writerxxi"}
              >
                XXI c.
              </StyledTextPerson>
            </StyledInfoPerson>
            <StyledInfoBox>
              {details?.[selected].length ? (
                <StyledAbout>
                  {details?.[selected].map(({ surname }) => (
                    <li>{surname}</li>
                  ))}
                </StyledAbout>
              ) : (
                <p>No information yet</p>
              )}
            </StyledInfoBox>
          </StyledPersonBox>
        )}
      </StyledWriters>
    </>
  );

  const starter = (
    <>
      <StyledMain>learn with the Ukrainian map</StyledMain>
      <StyledSubtitle>What do you want to know?</StyledSubtitle>
      <StyledAlter>
        Please choose and click on any region on the map!
      </StyledAlter>
    </>
  );
  return <MainContainer>{details ? chosenInfo : starter}</MainContainer>;
};
