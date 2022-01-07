import { useState } from "react";
import styled from "styled-components";
import env from "react-dotenv";
import Button from "./Button";

const ShortenLinkCard = () => {
  const [url, setUrl] = useState("");
  const [shortenedData, setShortenedData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    try {
      return matchpattern.test(string);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleSubmit = () => {
    let checkedUrl = checkForProtocol(url);
    if (verifyUrl(checkedUrl) === true) {
      setError(false);
      let longUrl = checkedUrl;
      const reqUrl = "https://api-ssl.bitly.com/v4/shorten";
      const options = {
        method: "post",
        headers: new Headers({
          Authorization: `Bearer ${env.BITLY_TOKEN}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          long_url: longUrl.toString(),
          domain: "bit.ly",
        }),
      };
      fetch(reqUrl, options)
        .then((res) => res.json())
        .then((data) => {
          setShortenedData((previousData) => [...previousData, data]);
          setUrl("");
        });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Wrapper>
        {error === true ? (
          <>
            <LinkInput
              error
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
            />
            <ErrorText>Please add a link</ErrorText>
          </>
        ) : (
          <LinkInput
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here..."
          />
        )}
        <Button fontSize="20px" onClick={() => handleSubmit()}>
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
            <CopyUrlButton>Copy</CopyUrlButton>
          </LinkOutput>
        </OutputWrapper>
      ))}
    </>
  );
};

export default ShortenLinkCard;

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

const LinkOutput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-bottom: 1px solid #9e9aa8;
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
`;

const CopyUrlButton = styled.button`
  background: #2bd0d0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 0.75rem;
  border: none;
  width: 100%;
  cursor: pointer;
`;

const ShortenButton = styled.button`
  margin-top: 1rem;
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

const ErrorText = styled.em`
  font-size: 12px;
  color: #f46363;
  letter-spacing: 0.08px;
  align-self: flex-start;
`;
