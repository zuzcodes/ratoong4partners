import React from "react";
import { ConfirmationSection, ConfirmationHeading, ConfirmationSubheading, Image } from "./Confirmation.elements";

function Confirmation({ confHeading, confSubheading, img, alt, primary }) {
  return (
    <ConfirmationSection>
      <ConfirmationHeading primary={primary}>{confHeading}</ConfirmationHeading>
      <ConfirmationSubheading>{confSubheading}</ConfirmationSubheading>
      <Image src={img} alt={alt} />
    </ConfirmationSection>
  );
}

export default Confirmation;
