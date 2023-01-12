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
export const COntainerNotFOund = styled.div`
  border-radius: 0 5px 5px 0;
  background: #ffffff;
  max-width: 1360px;
  margin: 0 auto 0;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  display: flex;
`