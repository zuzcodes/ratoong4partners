import styled from "styled-components";

export const SignUpSection = styled.div`
  background-color: #1d2027;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  width: 350px;
  justify-content: center;
  align-items: center;
`;

export const SignUpFormHeading = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #5570ff;
`;

export const SignUpFormSubheading = styled.h3`
  margin-bottom: 30px;
  font-size: 1.3rem;
  color: #ffffff;
`;

export const SignUpFormName = styled.input`
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
    border: 2px solid #5570ff;
  }
`;

export const SignUpFormEmail = styled.input`
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
    border: 2px solid #5570ff;
  }
`;

export const SignUpFormPassword = styled.input`
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
    border: 2px solid #5570ff;
  }
`;
