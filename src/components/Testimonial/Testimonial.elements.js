import styled from "styled-components";

export const TestimonialSection = styled.div`
  background-color: #5570ff;
  display: flex;
  flex-direction: row;
  padding: 50px;
  justify-content: center;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TestimonialImg = styled.img`
  width: 200px;
  height: 200px;
  vertical-align: middle;
  border-radius: 50%;
  margin: 50px;
`;

export const TextColumn = styled.div`
  display: block;
  max-width: 500px;
`;

export const TestimonialHeader = styled.p`
  margin-bottom: 24px;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #f1f1f1;
`;

export const TestimonialText = styled.p`
  margin-bottom: 24px;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
`;

export const TestimonialSubtext = styled.p`
  margin-bottom: 30px;
  font-size: 1rem;
  color: #f1f1f1;
`;
