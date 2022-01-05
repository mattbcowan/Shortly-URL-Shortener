import styled from "styled-components";
import ShortenLinkCard from "./components/ShortenLinkCard";

function App() {
  return (
    <Wrapper>
      <Navigation>
        <Navbar>
          <ShortlyLogo src="/images/shortly-logo.svg" alt="Shortly Logo" />
          <Hamburger>
            <Bar />
            <Bar />
            <Bar />
          </Hamburger>
        </Navbar>
      </Navigation>
      <Main>
        <HeaderImage src="/images/person-at-desk-mobile.svg" />
        <Section>
          <CallToAction>More than just shorter links</CallToAction>
          <ActionText>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </ActionText>
          <GetStartedBtn>Get Started</GetStartedBtn>
        </Section>
        <ShortenLinkCard />
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  overflow: hidden;
  margin: 0;
`;

const Main = styled.main``;

const HeaderImage = styled.img`
  width: 100vw;
`;

const Navigation = styled.div``;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const ShortlyLogo = styled.img``;

const Hamburger = styled.div`
  height: 21px;
  width: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
`;

const Bar = styled.span`
  width: 24px;
  height: 3px;
  background: #9e9aa8;
  display: block;
`;

const CallToAction = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -1.05px;
  line-height: 48px;
  padding: 2rem 0;
  color: #34313d;
`;

const ActionText = styled.div`
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.12px;
  line-height: 30px;
  color: #9e9aa8;
  padding-bottom: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GetStartedBtn = styled.button`
  color: #ffffff;
  background: #2bd0d0;
  font-size: 20px;
  font-weight: 700;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
`;
