import env from "react-dotenv";

export const checkForProtocol = (string) => {
  if (string.startsWith("http://") || string.startsWith("https://")) {
    return new URL(string);
  } else {
    return new URL(`http://${string}`);
  }
};

export const verifyUrl = async (string) => {
  const matchPattern =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/gm;
  return matchPattern.test(string);
};

export const shortenUrl = async (string) => {
  const reqUrl = "https://api-ssl.bitly.com/v4/shorten";
  const checkedUrl = checkForProtocol(string);
  const verified = verifyUrl(checkedUrl);
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
    console.error(response.status);
  }

  if (!verified) {
    console.error("URL not valid");
  }

  const shortenedUrl = await response.json();
  return shortenedUrl;
};
