import { Button } from "../../globalStyles";
import validateContact from '../validateContact';
import useContact from '../useContact';
import { ContactSection, ContactFormContainer, ContactFormHeading, ContactFormSubheading, ContactFormEmail, ContactFormText, Error } from "./ContactForm.elements";

const ContactForm = ( { submitForm } ) => {
  const { handleChange, handleSubmit, value, error } = useContact(
     submitForm,
     validateContact
   );   
   return (
    <ContactSection>
      <ContactFormContainer>
        <ContactFormHeading>GET IN TOUCH</ContactFormHeading>
        <ContactFormSubheading>Always happy to hear from you!</ContactFormSubheading>
        <form onSubmit={handleSubmit} noValidate>
        <Error>{error.email && <p>{error.email}</p>}</Error>
        <ContactFormEmail
            type='email'
            name='email'
            placeholder='Email'
            value={value.email}
            onChange={handleChange}
         />
        <ContactFormText name="message" type="text" placeholder="Message" required />
        
          <Button wide display type="submit">
            SEND
          </Button>
          </form>
       
      </ContactFormContainer>
    </ContactSection>
  );
}

export default ContactForm;
