import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import { InformationSection, InformationRow, InformationColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from "./Information.elements";

function Information({
  primary,
  display,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  return (
      <InformationSection lightBg={lightBg}>
        <Container>
          <InformationRow imgStart={imgStart}>
            <InformationColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button primary={primary} display={display}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InformationColumn>
            <InformationColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InformationColumn>
          </InformationRow>
        </Container>
      </InformationSection>
  );
}

export default Information;