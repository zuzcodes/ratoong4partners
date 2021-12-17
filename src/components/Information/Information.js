import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Btn } from "../../globalStyles";
import { InformationSection, InformationRow, InformationColumn, TextWrapper, TopLine, Heading, Text, ImgWrapper, Img } from "./Information.elements";

function Information({
  primary,
  display,
  show,
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
                <Text lightTextDesc={lightTextDesc}>{description}</Text>
                <Link to="/sign-up">
                  <Button primary={primary} display={display} show={show}>
                    {buttonLabel}
                  </Button>
                </Link>
                <Link to="/demo">
                  <Btn show={show}>
                    {buttonLabel}
                  </Btn>
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
