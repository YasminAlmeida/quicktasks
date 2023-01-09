import styled from "styled-components";

export const HomeContainer = styled.section`
  display: grid;
  justify-content: center;
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 45px;    
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    justify-content: left;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
