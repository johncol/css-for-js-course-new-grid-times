import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Grid>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Grid>
  );
};

const Grid = styled.div`
  --spacing: 3rem;
  --bordered-spacing: 1rem;

  margin-bottom: var(--spacing);
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: var(--spacing);

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story      secondary-stories"
      "advertisement   advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr minmax(24ch, 1fr);
    gap: var(--spacing) 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story   secondary-stories opinion-stories"
      "main-story   advertisement     advertisement";
    grid-template-columns: 5fr 4fr minmax(25ch, 3fr);
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--bordered-spacing);
    border-right: var(--grid-border);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: var(--bordered-spacing);
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: var(--bordered-spacing);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-left: var(--bordered-spacing);
    border-left: var(--grid-border);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    margin-left: var(--bordered-spacing);
    margin-top: var(--bordered-spacing);
    padding-top: var(--bordered-spacing);
    border-top: var(--grid-border);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStoryList = styled(StoryList)``;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 2rem;

    & > * {
      flex: 1;
    }
  }
`;

export default MainStoryGrid;
