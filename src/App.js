import styled from "styled-components";
import ShortenLinkCard from "./components/ShortenLinkCard";
import InfoCard from "./components/InfoCard";

const statisticCardData = [
  {
    image: "/images/bar-graph.svg",
    title: "Brand Recognition",
    info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: "/images/gague.svg",
    title: "Detailed Records",
    info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: "/images/art-tools.svg",
    title: "Fully Customizable",
    info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

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
        <SectionDark>
          <Spacing />
          <SectionHeader>Advanced Statistics</SectionHeader>
          <SectionText>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </SectionText>
          <CardList>
            {statisticCardData.map((card, index) => {
              return statisticCardData.length - 1 === index ? (
                <InfoCard
                  image={card.image}
                  title={card.title}
                  info={card.info}
                  key={index}
                />
              ) : (
                <>
                  <InfoCard
                    image={card.image}
                    title={card.title}
                    info={card.info}
                    key={index}
                  />
                  <ConnectionBar />
                </>
              );
            })}
          </CardList>
        </SectionDark>
        <BoostSection>
          <LinksContainer>
            <SectionHeader light>Boost your links today</SectionHeader>
            <GetStartedBtn>Get Started</GetStartedBtn>
          </LinksContainer>
        </BoostSection>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  margin: 0;
`;

const Main = styled.main``;

const HeaderImage = styled.img`
  padding-left: 1rem;
  width: 100vw;
`;

const Navigation = styled.div`
  padding: 1rem;
`;

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
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`;

const BoostSection = styled.section`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #3a3054;
  background-image: url("/images/boost-blob.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const GetStartedBtn = styled.button`
  color: #ffffff;
  background: #2bd0d0;
  font-size: 20px;
  font-weight: 700;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 175ms ease-in;

  :hover {
    background: #9ae3e3;
  }
`;

const SectionDark = styled.section`
  padding: 1rem 2rem;
  margin-top: -6rem;
  background: #f2f2f2;
  text-align: center;
`;

const Spacing = styled.div`
  margin-top: 8rem;
`;

const SectionHeader = styled.h2`
  margin: 1rem 0;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.7px;
  font-weight: 700;
  color: ${(props) => (props.light ? "#ffffff" : "#34313d")};
`;

const SectionText = styled.div`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.11px;
  color: #9e9aa8;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;

const ConnectionBar = styled.div`
  width: 8px;
  height: 50px;
  background: #2bd0d0;
`;

const LinksContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
