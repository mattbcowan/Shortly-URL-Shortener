import styled from "styled-components";
import Button from "./Button";

const BoostLinks = () => {
  return (
    <Section>
      <Wrapper>
        <SectionHeader light>Boost your links today</SectionHeader>
        <Button
          borderRadius="50px"
          fontSize="20px"
          padding="1rem 3rem"
          width="auto"
        >
          Get Started
        </Button>
      </Wrapper>
    </Section>
  );
};

export default BoostLinks;

const Section = styled.section`
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

const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.h2`
  margin: 1rem 0;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.7px;
  font-weight: 700;
  color: ${(props) => (props.light ? "#ffffff" : "#34313d")};
`;
