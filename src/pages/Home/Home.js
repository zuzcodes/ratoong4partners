import React from "react";
import { informationObjOne, informationObjTwo, informationObjThree } from "./Data";
import { Information } from "../../components";
import { Quote } from "../../components";
import { ContactForm } from "../../components";

function Home() {
  return (
    <>
      <Information {...informationObjOne} />
      <Information {...informationObjTwo} />
      <Quote />
      <Information {...informationObjThree} />
      <ContactForm />
    </>
  );
}

export default Home;