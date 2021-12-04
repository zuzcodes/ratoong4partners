import styled from "styled-components";

export const QuoteSection = styled.div`
  background-color: #cfdaff;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 140px 100px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const QuoteText = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
`;

export const QuoteSubtext = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
`;
