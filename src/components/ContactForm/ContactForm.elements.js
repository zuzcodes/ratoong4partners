import styled from "styled-components";

export const ContactSection = styled.div`
  background-color: #1d2027;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 100px 50px 0px 50px;
  justify-content: center;
  align-items: center;
`;

export const ContactFormHeading = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #cfdaff;
`;

export const ContactFormSubheading = styled.h3`
  margin-bottom: 30px;
  font-size: 1.3rem;
  color: #ffffff;
`;

export const ContactFormEmail = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin: 0 0 16px 0;
  outline: none;
  font-size: 0.9rem;
  border: 2px solid #ffffff;
  width: 100%;

  &::placeholder {
    color: #242424;
  }

  &:focus {
    transition: all 0.5s ease;
    border: 2px solid #cfdaff;
  }
`;

export const ContactFormText = styled.textarea`
  padding: 10px 20px 100px 20px;
  border-radius: 2px;
  margin: 0 0 16px 0;
  outline: none;
  font-size: 0.9rem;
  border: 2px solid #ffffff;
  width: 100%;

  &::placeholder {
    transition: all 0.5s ease;
    color: #242424;
  }

  &:focus {
    transition: all 0.5s ease;
    border: 2px solid #cfdaff;
  }
`;

export const Error = styled.p`
padding-bottom: 5px;
text-align: left;
color: #ffc2a4;
font-size: 0.8rem;
`