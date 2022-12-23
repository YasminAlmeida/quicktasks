import styled from "styled-components";

export const SidebarContainer = styled.a`
  text-decoration: none;
  max-width: 1300px;
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  z-index: 1;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: linear-gradient(90deg, #9f8fff 100%, #7b68ee 0);
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
    margin-left: 10px;
  }
`;

export const Title = styled.h1`
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  margin-left: 5px;
`;
