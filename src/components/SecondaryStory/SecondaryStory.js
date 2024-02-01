import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <LinkToStory href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
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
`;

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: .25rem 1rem;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "image"
      "heading"
      "abstract";
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
  text-wrap: balance;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default SecondaryStory;
