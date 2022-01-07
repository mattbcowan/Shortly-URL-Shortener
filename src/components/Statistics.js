import styled from "styled-components";
import ShortenLinkCard from "./ShortenLinkCard";
import InfoCard from "./InfoCard";

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

const Statistics = () => {
  return (
    <Container>
      <Wrapper>
        <ShortenLinkCard />
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
      </Wrapper>
    </Container>
  );
};

export default Statistics;

const Container = styled.section``;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin-top: 8rem;
  background: #f2f2f2;
  text-align: center;
`;

const SectionHeader = styled.h2`
  margin: 1rem 0;
  margin-top: 4rem;
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
