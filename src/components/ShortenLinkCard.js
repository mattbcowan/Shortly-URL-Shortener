import { useState, useEffect } from "react";
import styled from "styled-components";
import env from "react-dotenv";
import Button from "./Button";

const ShortenLinkCard = () => {
  const [url, setUrl] = useState("");
  const [shortenedData, setShortenedData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const checkForProtocol = (string) => {
    let url;
    try {
      if (string.startsWith("http://") || string.startsWith("https://")) {
        url = new URL(string);
      } else {
        url = new URL(`http://${string}`);
      }
      return url;
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const verifyUrl = (string) => {
    const matchpattern =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/gm;
    try {
      return matchpattern.test(string);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleSubmit = async () => {
    const reqUrl = "https://api-ssl.bitly.com/v4/shorten";
    let checkedUrl = checkForProtocol(url);
    let verified = verifyUrl(checkedUrl);

    const options = {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${env.BITLY_TOKEN}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        long_url: checkedUrl.toString(),
        domain: "bit.ly",
      }),
    };

    const response = await fetch(reqUrl, options);

    if (!response.ok) {
      setError(true);
      setErrorMessage(`An error has occured: ${response.status}`);
    }

    if (!verified) {
      setError(true);
      setErrorMessage("Not a valid URL");
    }

    const shortenedUrl = await response.json();
    setShortenedData((previousData) => [...previousData, shortenedUrl]);
    setUrl("");
  };

  return (
    <Container>
      <Wrapper>
        {error === true ? (
          <ErrorContainer>
            <LinkInput
              error
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
            />
            <ErrorText>{errorMessage}</ErrorText>
          </ErrorContainer>
        ) : (
          <LinkInput
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here..."
          />
        )}
        <Button
          fontSize="20px"
          marginTop={screenWidth > 800 ? "0" : ""}
          onClick={() => handleSubmit()}
        >
          Shorten It!
        </Button>
      </Wrapper>
      {shortenedData.map((data, index) => (
        <OutputWrapper key={index}>
          <LinkOutput>
            <LongUrl>
              {data.long_url.length > 30
                ? data.long_url.slice(0, 26).concat("...")
                : data.long_url}
            </LongUrl>
          </LinkOutput>
          <LinkOutput>
            <ShortUrl>{data.link}</ShortUrl>
            <Button
              fontSize="16px"
              marginTop={screenWidth > 800 ? "0" : ""}
              width={screenWidth > 800 ? "10em" : "100%"}
            >
              Copy
            </Button>
          </LinkOutput>
        </OutputWrapper>
      ))}
    </Container>
  );
};

export default ShortenLinkCard;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  margin-top: -5rem;
  padding: 1.5rem;
  color: #ffffff;
  background: #3a3054;
  border-radius: 1rem;
  background-image: url("/images/shorten-card-blob.svg");
  background-repeat: no-repeat;
  background-position: top right;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 1em;
    align-items: start;
    padding: 2em;
  }
`;

const LinkInput = styled.input`
  display: flex;
  font-size: 16px;
  padding: 0.75rem;
  border: ${(props) => (props.error ? "3px solid #F46363" : "none")};
  outline: none;
  border-radius: 0.25em;
  width: 100%;

  ::placeholder {
    color: ${(props) => (props.error ? "#F46363" : "#34313d")};
  }
`;

const OutputWrapper = styled.div`
  margin: 1rem 0;
  border-radius: 1rem;
  background: #ffffff;
  color: #34313d;
  padding: 0;
  text-align: left;
  transition: background 175ms ease-in;
  & :nth-child(2) {
    border-bottom: none;
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;

    & :nth-child(2) {
      justify-content: flex-end;
    }
  }
`;

const LinkOutput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-bottom: 1px solid #9e9aa8;

  @media (min-width: 800px) {
    flex-direction: row;
    border-bottom: none;
    flex: 1;
  }
`;

const LongUrl = styled.div`
  text-size: 16px;
  letter-spacing: 0.12px;
`;

const ShortUrl = styled.div`
  color: #2bd0d0;
  padding-bottom: 0.5rem;
  text-size: 16px;
  letter-spacing: 0.12px;

  @media (min-width: 800px) {
    margin-right: 1em;
    align-self: center;
    padding-bottom: 0;
  }
`;

const ErrorText = styled.em`
  font-size: 12px;
  color: #f46363;
  letter-spacing: 0.08px;
  align-self: flex-start;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
