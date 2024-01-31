import styled from "styled-components/macro";

export const LinkToStory = styled.a`
  padding: 1rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;
