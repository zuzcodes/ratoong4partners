import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../../components";

function SignUp() {
  const navigate = useNavigate();
  function submitForm() {
    navigate("/sign-up-confirmation");
  }
  return <SignUpForm submitForm={submitForm} />;
}

export default SignUp;
