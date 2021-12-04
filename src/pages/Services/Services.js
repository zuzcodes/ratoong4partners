import React from "react";
import { serviceObjOne, serviceObjTwo, serviceObjThree } from "./Data";
import { Information } from "../../components";
import { Testimonial } from "../../components";

function Services() {
  return (
    <>
      <Information {...serviceObjOne} />
      <Information {...serviceObjTwo} />
      <Information {...serviceObjThree} />
      <Testimonial />
    </>
  );
}

export default Services;
