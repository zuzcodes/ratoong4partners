import React from "react";
import { BarChart, PieChartAge, PieChartCountry, PieChartGender, PieChartGroup, PieChartLevel, PieChartSport } from "../../components";
import reporting from "../../illustrations/reporting.svg";
import {
  ReportContainer,
  ReportHeaderWrapper,
  ReportHeaderColumn,
  ReportHeading,
  ReportSubheading,
  Stats,
  RatingContainer,
  RatingCount,
  RatingText,
  ReportImg,
  OverallScore,
  FullCircle,
  EmptyCircle,
  BarChartContainer,
  PieChartWrapper,
  PieChartContainer,
  RecommendationsContainer,
  RecommendationsHeading,
  RecommendationContainer,
  RecommendationNumber,
  RecommendationText,
} from "./Report.elements";

function Report() {
  return (
    <ReportContainer>
      <ReportHeaderWrapper>
        <ReportHeaderColumn>
          <ReportHeading>White Peaks</ReportHeading>
          <ReportSubheading>Alberta</ReportSubheading>
        </ReportHeaderColumn>
        <ReportImg src={reporting} />
      </ReportHeaderWrapper>
      <Stats>
        <RatingContainer>
          <RatingCount>100</RatingCount>
          <RatingText>RATINGS</RatingText>
        </RatingContainer>
        <OverallScore>
          <FullCircle />
          <FullCircle />
          <FullCircle />
          <FullCircle />
          <EmptyCircle />
        </OverallScore>
      </Stats>
      <BarChartContainer>
        <BarChart />
      </BarChartContainer>
      <PieChartWrapper>
        <PieChartContainer>
          <PieChartAge />
        </PieChartContainer>
        <PieChartContainer>
          <PieChartCountry />
        </PieChartContainer>
        <PieChartContainer>
          <PieChartGender />
        </PieChartContainer>
      </PieChartWrapper>
      <PieChartWrapper>
        <PieChartContainer>
          <PieChartGroup />
        </PieChartContainer>
        <PieChartContainer>
          <PieChartLevel />
        </PieChartContainer>
        <PieChartContainer>
          <PieChartSport />
        </PieChartContainer>
      </PieChartWrapper>
      <RecommendationsContainer>
        <RecommendationsHeading>RECOMMENDATIONS</RecommendationsHeading>
        <RecommendationContainer>
          <RecommendationNumber>01</RecommendationNumber>
          <RecommendationText>
            Slope preparation received the lowest score. Elocating more time and resources towards its preparation will make your customers more satisfied and
            bring you better score next time.
          </RecommendationText>
        </RecommendationContainer>
        <RecommendationContainer>
          <RecommendationNumber>02</RecommendationNumber>
          <RecommendationText>
            Your demographics shows that your resort is popular among tourists from Mexico. It might be benefitial to take that into account when structuring
            your event schedule for the next season.
          </RecommendationText>
        </RecommendationContainer>
        <RecommendationContainer>
          <RecommendationNumber>03</RecommendationNumber>
          <RecommendationText>
            There is increasing volume of beginners on your slopes. Small changes at lift entrances can make their experience safer and more enjoyable.
          </RecommendationText>
        </RecommendationContainer>
        <RecommendationContainer>
          <RecommendationNumber>04</RecommendationNumber>
          <RecommendationText>
            Snowboarders like to come back to your resort. We recommend enabling more forest trials and establishing good ride-in and ride-out opportunities.
          </RecommendationText>
        </RecommendationContainer>
      </RecommendationsContainer>
    </ReportContainer>
  );
}
export default Report;
