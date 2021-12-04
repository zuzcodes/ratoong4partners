import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FooterContainer, SocialMedia, SocialIconLink } from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="https://www.twitter.com/" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIconLink>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
