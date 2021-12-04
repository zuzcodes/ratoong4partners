import React from "react";
import { QuoteSection, QuoteText, QuoteSubtext } from './Quote.elements';

function Quote() { 
  return (
    <QuoteSection>
      <QuoteText>"Transparent and well-structured rating flow produces quality data you can rely on."</QuoteText>
      <QuoteSubtext>- Eg Nicolajsen, Founder</QuoteSubtext>
    </QuoteSection>
  );
}

export default Quote;