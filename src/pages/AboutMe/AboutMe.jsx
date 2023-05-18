import { React, useState } from "react";
import {
  StyledWrapper,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledYoutube,
  StyledExpandedYoutube,
} from "./AboutMe.styled";

import { ReactComponent as Youtube } from "../../icons/youtube.svg";
import { ReactComponent as Linkedin } from "../../icons/linkedin.svg";
import { ReactComponent as Github } from "../../icons/github.svg";

export const AboutMe = () => {
  const [youtubeExpanded, setYoutubeExpanded] = useState(false);

  return (
    <StyledWrapper>
      <StyledTitle>About Me</StyledTitle>
      <div>
        <StyledList>
          <li>
            <StyledItem
              href="https://github.com/irynam23"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </StyledItem>
          </li>
          <li>
            <StyledItem
              href="https://www.linkedin.com/in/iryna-malii/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </StyledItem>
          </li>

          <li>
            <StyledYoutube
              onMouseOver={() => setYoutubeExpanded(true)}
              onMouseLeave={() => setYoutubeExpanded(false)}
            >
              <Youtube />
              {youtubeExpanded && (
                <StyledExpandedYoutube>
                  <a
                    href="https://www.youtube.com/@iryna_malii"
                    target="_blank"
                    rel="noreferrer"
                  >
                    en
                  </a>
                  <a
                    href="https://www.youtube.com/@bunny_alice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ua
                  </a>
                </StyledExpandedYoutube>
              )}
            </StyledYoutube>
          </li>
        </StyledList>
      </div>
    </StyledWrapper>
  );
};
