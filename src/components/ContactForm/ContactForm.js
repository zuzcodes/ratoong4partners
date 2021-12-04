import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../globalStyles";
import { ContactSection, ContactFormContainer, ContactFormHeading, ContactFormSubheading, ContactFormEmail, ContactFormText } from "./ContactForm.elements";

function ContactForm() {
  const [email, setEmail] = useState("");
  const emailChange = (e) => setEmail(e.target.value);

  return (
    <ContactSection>
      <ContactFormContainer>
        <ContactFormHeading>GET IN TOUCH</ContactFormHeading>
        <ContactFormSubheading>Always happy to hear from you!</ContactFormSubheading>
        <ContactFormEmail name="email" type="email" placeholder="Email" value={email} onChange={emailChange} required />
        <ContactFormText name="message" type="text" placeholder="Message" required />
        <Link to="/contact-confirmation">
          <Button wide display type="submit">
            SEND
          </Button>
        </Link>
      </ContactFormContainer>
    </ContactSection>
  );
}

export default ContactForm;
