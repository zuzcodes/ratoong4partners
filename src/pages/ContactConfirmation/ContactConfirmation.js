import React from "react";
import { Confirmation } from "../../components";
import { contactConfObj } from "./Data";

function ContactConfirmation() {
  return <Confirmation {...contactConfObj} />;
}

export default ContactConfirmation;
