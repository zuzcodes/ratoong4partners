import styled from "styled-components";

export const ConfirmationSection = styled.div`
  background-color: #1d2027;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 140px 50px 50px 50px;

  @media screen and (max-width: 991px) {
    padding: 120px 50px 50px 50px;
  }
`;

export const ConfirmationHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: ${({ primary }) => (primary ? "#5570ff" : "#cfdaff")};
  padding-bottom: 20px;
`;

export const ConfirmationSubheading = styled.h3`
  max-width: 600px;
  font-size: 1.2rem;
  color: #ffffff;
  padding-bottom: 50px;
`;

export const Image = styled.img`
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;
`;
