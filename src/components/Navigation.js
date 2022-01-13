import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Section>
          <ShortlyLogo src="/images/shortly-logo.svg" alt="Shortly Logo" />
          <Hamburger onClick={toggleNav}>
            <Bar />
            <Bar />
            <Bar />
          </Hamburger>
        </Section>
        <Section>
          {(toggleMenu || screenWidth > 800) && (
            <Nav>
              <NavList id="left-nav">
                <NavListItem>Features</NavListItem>
                <NavListItem>Pricing</NavListItem>
                <NavListItem>Resources</NavListItem>
              </NavList>
              <NavList>
                <NavListItem>Login</NavListItem>
                <NavListItem>
                  <Button borderRadius={"10rem"} marginTop={"0"}>
                    Sign Up
                  </Button>
                </NavListItem>
              </NavList>
            </Nav>
          )}
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
  z-index: 10;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const ShortlyLogo = styled.img`
  max-width: 120px;
`;

const Hamburger = styled.div`
  height: 21px;
  width: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;

const Bar = styled.span`
  width: 24px;
  height: 3px;
  background: #9e9aa8;
  display: block;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  background-color: #3a3054;
  color: #ffffff;
  padding: 1em;
  border-radius: 0.5em;

  @media (min-width: 800px) {
    background-color: transparent;
    flex-direction: row;
    color: #9e9aa8;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 800px) {
    flex-direction: row;
    margin-left: 2em;
  }
`;

const NavListItem = styled.li`
  margin-top: 0.5em;
  margin-bottom: 0.5em;

  @media (min-width: 800px) {
    margin-right: 2em;
  }
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media (min-width: 800px) {
    &:first-child {
      flex: none;
    }
  }
`;
