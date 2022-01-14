import styled from "styled-components";
import Button from "./Button";

const Header = () => {
  return (
    <Container>
      <HeaderImage src="/images/person-at-desk-mobile.svg" />
      <Wrapper>
        <CallToAction>More than just shorter links</CallToAction>
        <ActionText>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </ActionText>
        <Button
          borderRadius="50px"
          fontSize="20px"
          padding="1rem 3rem"
          width="auto"
        >
          Get Started
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;

  @media (min-width: 800px) {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    align-items: flex-start;
  }
`;

const HeaderImage = styled.img`
  padding-left: 1rem;
  width: 100%;

  @media (min-width: 800px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const CallToAction = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -1.05px;
  line-height: 48px;
  padding: 2rem 0;
  color: #34313d;

  @media (min-width: 800px) {
    text-align: left;
    font-size: 4em;
    line-height: 1.2em;
    padding-bottom: 0.5rem;
  }
`;

const ActionText = styled.div`
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.12px;
  line-height: 30px;
  color: #9e9aa8;
  padding-bottom: 2rem;

  @media (min-width: 800px) {
    text-align: left;
    padding-bottom: 0.5rem;
  }
`;
