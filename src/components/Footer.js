import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <ShortlyLogo src="/images/shortly-logo-white.svg" />
      <ListHeader>Features</ListHeader>
      <List>
        <ListItem>Link Shortening</ListItem>
        <ListItem>Branded Links</ListItem>
        <ListItem>Analytics</ListItem>
      </List>
      <ListHeader>Resources</ListHeader>
      <List>
        <ListItem>Blog</ListItem>
        <ListItem>Developers</ListItem>
        <ListItem>Support</ListItem>
      </List>
      <ListHeader>Company</ListHeader>
      <List>
        <ListItem>About</ListItem>
        <ListItem>Our Team</ListItem>
        <ListItem>Careers</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <SocialWrapper>
        <SocialIcon mask="/images/facebook.svg" />
        <SocialIcon mask="/images/twitter.svg" />
        <SocialIcon mask="/images/pinterest.svg" />
        <SocialIcon mask="/images/instagram.svg" />
      </SocialWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background: #232127;
  color: #bfbfbf;
  font-size: 15px;
  padding: 4rem;
  text-align: center;
`;

const ShortlyLogo = styled.img`
  margin-bottom: 2rem;
`;

const ListHeader = styled.div`
  color: #ffffff;
  font-size: 16px;
  letter-spacing: -0.25px;
  font-weight: 700;
  padding: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding-bottom: 1rem;
  transition: color 175ms ease-in;
  cursor: pointer;
  :hover {
    color: #2bd0d0;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2rem;
`;

const SocialIcon = styled.svg`
  display: inline-block;
  height: 24px;
  width: 24px;
  mask: url(${(props) => props.mask});
  mask-size: contain;
  mask-repeat: no-repeat;
  background: #ffffff;
  transition: background 175ms ease-in;
  cursor: pointer;
  :hover {
    background: #2bd0d0;
  }
`;
