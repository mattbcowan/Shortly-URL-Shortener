import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <ShortlyLogo src="/images/shortly-logo.svg" alt="Shortly Logo" />
        <Hamburger>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </Wrapper>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  padding: 1rem 2rem;
`;

const Wrapper = styled.div`
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
