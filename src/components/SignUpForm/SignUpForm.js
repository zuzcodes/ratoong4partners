import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../globalStyles";
import {
  SignUpSection,
  SignUpFormContainer,
  SignUpFormHeading,
  SignUpFormSubheading,
  SignUpFormName,
  SignUpFormEmail,
  SignUpFormPassword,
} from "./SignUpForm.elements";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const emailChange = (e) => setEmail(e.target.value);

  return (
    <SignUpSection>
      <SignUpFormContainer>
        <SignUpFormHeading>SIGN UP</SignUpFormHeading>
        <SignUpFormSubheading>Join the snow partnership!</SignUpFormSubheading>
        <SignUpFormName name="name" type="text" placeholder="Name" required />
        <SignUpFormEmail name="email" type="email" placeholder="Email" value={email} onChange={emailChange} required />
        <SignUpFormPassword name="password" type="password" placeholder="Password" required />
        <Link to="/sign-up-confirmation">
          <Button primary display wide type="submit">
            SIGN UP
          </Button>
        </Link>
      </SignUpFormContainer>
    </SignUpSection>
  );
}

export default SignUpForm;
