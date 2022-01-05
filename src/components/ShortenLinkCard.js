import styled from "styled-components";

const ShortenLinkCard = () => {
  return (
    <Wrapper>
      <LinkInput placeholder="Shorten a link here..." />
      <ShortenButton>Shorten It!</ShortenButton>
    </Wrapper>
  );
};

export default ShortenLinkCard;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  margin: 1rem 2rem;
  margin-top: 6rem;
  padding: 1.5rem;
  color: #ffffff;
  background: #3a3054;
  border-radius: 1rem;
  background-image: url("/images/shorten-card-blob.svg");
  background-repeat: no-repeat;
  background-position: top right;
`;

const LinkInput = styled.input`
  display: flex;
  font-size: 16px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  border-radius: 0.25em;
  width: 100%;

  ::placeholder {
    color: #34313d;
  }
`;

const ShortenButton = styled.button`
  color: #ffffff;
  background: #2bd0d0;
  font-size: 20px;
  font-weight: 700;
  padding: 1rem 3rem;
  border: none;
  width: 100%;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background 175ms ease-in;

  :hover {
    background: #9ae3e3;
  }
`;
