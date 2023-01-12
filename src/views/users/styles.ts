import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 0;
`
export const Title = styled.h1`
  margin-top: 40px;
  line-height: 1;
  font-size: 2rem;
  margin-left: 20px;
  &::after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`
export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 73px;
  right: 0;
`;