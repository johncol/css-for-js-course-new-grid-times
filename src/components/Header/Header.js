import React from "react";
import { Menu, Search, User } from "react-feather";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";

import Button from "../Button";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <ActionsAsIcons />
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupVisibleOnLaptopAndUp>
          <ActionsAsIcons />
        </ActionGroupVisibleOnLaptopAndUp>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Subscription>
          <Button>Subscribe</Button>
          <AlreadySubscribedLink href="#">
            Already a subscriber?
          </AlreadySubscribedLink>
        </Subscription>
      </MainHeader>
    </header>
  );
};

const ActionsAsIcons = () => {
  return (
    <>
      <button>
        <VisuallyHidden>Search</VisuallyHidden>
        <Search size={24} />
      </button>
      <button>
        <VisuallyHidden>Menu</VisuallyHidden>
        <Menu size={24} />
      </button>
    </>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "left-column center-column right-column";
  justify-content: space-between;
  align-items: center;

  margin: 2rem auto 3rem;

  @media ${QUERIES.tabletAndUp} {
    margin: 3rem auto 4rem;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 1rem auto 4rem;
  }
`;

const ActionGroupVisibleOnLaptopAndUp = styled(ActionGroup)`
  display: none;
  grid-area: left-column;
  justify-self: left;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const LogoWrapper = styled.div`
  grid-area: center-column;
  justify-self: center;
`;

const Subscription = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    grid-area: right-column;
    justify-self: end;
    align-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(8rem / 16);
  }
`;

const AlreadySubscribedLink = styled.a`
  color: var(--color-gray-900);
  font-family: var(--font-family-serif);
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
