import styled from "styled-components";

const InfoCard = ({ image, title, info }) => {
  return (
    <Wrapper>
      <CardImage src={image} alt="icon" />
      <InnerWrapper>
        <CardTitle>{title}</CardTitle>
        <CardInfo>{info}</CardInfo>
      </InnerWrapper>
    </Wrapper>
  );
};

export default InfoCard;

const Wrapper = styled.div``;

const CardImage = styled.img`
  background: #3a3054;
  padding: 1rem;
  border-radius: 10rem;
`;

const InnerWrapper = styled.div`
  background: #ffffff;
  padding: 2rem;
  padding-top: 4rem;
  margin-top: -2.75rem;
  border-radius: 0.5rem;
`;

const CardTitle = styled.div`
  font-size: 22px;
  color: #34313d;
`;

const CardInfo = styled.div`
  font-size: 15px;
  color: #9e9aa8;
  line-height: 26px;
`;
