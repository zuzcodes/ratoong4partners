import styled from "styled-components";

export const ReportContainer = styled.div`
  background-color: #1d2027;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 100px 0px 100px;

  @media screen and (max-width: 991px) {
    padding: 50px 50px 0px 50px;
  }
`;

export const ReportHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ReportHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const ReportHeading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
`;

export const ReportSubheading = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: #ffffff;
`;

export const ReportImg = styled.img`
  max-width: 350px;
  height: 100%;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
`;


export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  text-align: right;
`;

export const RatingCount = styled.h3`
  font-size: 5rem;
  font-weight: 700;
  color: #5570ff;
  margin-top: 10px;
`;

export const RatingText = styled.h4`
  font-size: 1rem;
  letter-spacing: 0.5rem;
  font-weight: 100;
  color: #5570ff;
`;

export const OverallScore = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const FullCircle = styled.div`
  background: #5570ff;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 5px;

  @media screen and (max-width: 991px) {
    width: 30px;
  height: 30px;
  border-radius: 15px;
  }
`;

export const EmptyCircle = styled.div`
width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #5570ff;
  margin: 5px;

  @media screen and (max-width: 991px) {
    width: 30px;
  height: 30px;
  border-radius: 15px;
  }

`;

export const BarChartContainer = styled.div`
  display: flex;
  margin: 50px 0px;
  width: 80%;
  padding: 30px 0px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const PieChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const PieChartContainer = styled.div`
  padding: 20px 0px;
`;

export const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 40px;
  margin: 60px auto;
  border-bottom: 1px solid #ffffff;
  border-top: 1px solid #ffffff;
  text-align: left;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const RecommendationsHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #5570ff;
  padding: 20px;
`;

export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const RecommendationNumber = styled.p`
  font-size: 5rem;
  font-weight: 700;
  padding-right: 20px;
  color: #5570ff;
`;

export const RecommendationText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  text-align: left;
`;
