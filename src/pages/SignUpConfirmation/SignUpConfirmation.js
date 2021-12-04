import React from "react";
import { Confirmation } from "../../components";
import { signUpConfObj } from "./Data";

function SignUpConfirmation() {
  return <Confirmation {...signUpConfObj} />;
}

export default SignUpConfirmation;
