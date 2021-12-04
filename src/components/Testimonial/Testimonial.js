import React from "react";
import { TestimonialSection, TestimonialImg, TextColumn, TestimonialHeader, TestimonialText, TestimonialSubtext } from "./Testimonial.elements";
import profile from "../../illustrations/profile.jpg";

function Testimonial() {
  return (
    <TestimonialSection>
      <TestimonialImg src={profile} />
      <TextColumn>
        <TestimonialHeader>TESTIMONIAL</TestimonialHeader>
        <TestimonialText>"Partnering with Ratoong was a step towards utilizing what we know about our customers."</TestimonialText>
        <TestimonialSubtext>- Paul Davis, Marketing Director of White Peaks</TestimonialSubtext>
      </TextColumn>
    </TestimonialSection>
  );
}

export default Testimonial;
