import styled from "styled-components";

const Button = ({
  children,
  onClick,
  marginTop,
  fontSize,
  padding,
  borderRadius,
  width,
}) => {
  return (
    <Wrapper
      marginTop={marginTop}
      fontSize={fontSize}
      padding={padding}
      onClick={onClick}
      borderRadius={borderRadius}
      width={width}
    >
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  margin-top: ${(props) => props.marginTop || "1rem"};
  background: #2bd0d0;
  color: #ffffff;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: 700;
  padding: ${(props) => props.padding || "0.75rem"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.25em"};
  width: ${(props) => props.width || "100%"};
  cursor: pointer;
`;
