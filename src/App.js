import styled from "styled-components";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Main>
        <Header />
        <Statistics />
        <BoostLinks />
      </Main>
      <Footer />
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
