import React from "react";
import { useNavigate } from "react-router-dom";
import { informationObjOne, informationObjTwo, informationObjThree } from "./Data";
import { Information } from "../../components";
import { Quote } from "../../components";
import { ContactForm } from "../../components";

function Home() {
  const navigate = useNavigate();
  function submitForm() {
    navigate("/contact-confirmation")
  }
  return (
    <>
      <Information {...informationObjOne} />
      <Information {...informationObjTwo} />
      <Quote />
      <Information {...informationObjThree} />
      <ContactForm submitForm={submitForm}/>
    </>
  );
}

export default Home;