import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 3rem;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 1rem;
  }
`;

const SportsSection = styled.section`
  overflow-x: hidden;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 1rem;
    border-left: var(--grid-border);
  }
`;

const FlexibleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      min(100%, 11rem), 1fr
    )
  );
  gap: 1rem;
`;

const MarketCards = styled(FlexibleGrid)``;

const SportsStories = styled(FlexibleGrid)`
  overflow-x: auto;
  scrollbar-width: none;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: revert;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
  }
`;

const MiniStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    width: calc(220 / 16 * 1rem);
  }
`;

export default SpecialtyStoryGrid;
