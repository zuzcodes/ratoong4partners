export default function validateContact(value) {
  let error = {};

  if (!value.email) {
    error.email = "Email is required";
  }
  return error;
}
