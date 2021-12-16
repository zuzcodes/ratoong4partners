import { Button } from "../../globalStyles";
import validate from "../validateForm";
import useForm from "../useForm";
import {
  SignUpSection,
  SignUpFormContainer,
  SignUpFormHeading,
  SignUpFormSubheading,
  SignUpFormName,
  SignUpFormEmail,
  SignUpFormPassword,
  Error,
} from "./SignUpForm.elements";

const SignUpForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
  return (
    <SignUpSection>
      <SignUpFormContainer onSubmit={handleSubmit} noValidate>
        <SignUpFormHeading>SIGN UP</SignUpFormHeading>
        <SignUpFormSubheading>Join the snow partnership now!</SignUpFormSubheading>
        <Error>{errors.name && <p>{errors.name}</p>}</Error>
        <SignUpFormName type="text" name="name" placeholder="Name" value={values.username} onChange={handleChange} />
        <Error>{errors.email && <p>{errors.email}</p>}</Error>
        <SignUpFormEmail type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
        <Error>{errors.password && <p>{errors.password}</p>}</Error>
        <SignUpFormPassword type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
        <Button primary display wide type="submit">
          SIGN UP
        </Button>
      </SignUpFormContainer>
    </SignUpSection>
  );
};

export default SignUpForm;