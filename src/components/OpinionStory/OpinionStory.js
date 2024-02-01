import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <LinkToStory href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <OpinionContent>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </OpinionContent>
      </Wrapper>
    </LinkToStory>
  );
};

const LinkToStory = styled.a`
  &:not(:first-of-type) {
    padding-top: var(--bordered-spacing);
  }

  &:not(:last-of-type) {
    padding-bottom: var(--bordered-spacing);
  }

  &:not(:last-of-type) {
    border-bottom: var(--grid-border);
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      border-bottom: revert;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);

  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1rem;

  @media ${QUERIES.tabletOnly} {
    margin-left: revert;
  }
`;

const OpinionContent = styled.div`
  flex: 1;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
