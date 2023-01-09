import styled from "styled-components";
import Searchicon from "../../assets/search.png";
import Reset from "../../assets/reset.png";
export const ContainerConfigurationFIlter = styled.section`
`
export const ResultOfFilter = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  position: absolute;
  top: 35px;
  div{
    display: flex;  
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
    font-size: 1.02rem;
    background-color: #ccc;
    p{
      margin: 0 5px;
      cursor: pointer;
    }
  }
  h5{
    font-weight: normal;

  }
`
export const ContainerFilter = styled.section`
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 30px;
  width: 90%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url(${Searchicon});
  background-position: 5px 10px;
  background-repeat: no-repeat;
  padding: 10px 20px 12px 40px;
  position: relative;
  @media (max-width: 768px) {
    background-image: none;
    padding: 10px 20px 12px 5px;
  }
  @media (max-width: 600px) {
    margin: 0;
    position: relative;
  }
`;
export const Btn = styled.button`
  background: linear-gradient(90deg, #9f8fff 100%, #7b68ee 0);
  border: none;
  color: #000000;
  font-size: 1.008rem;
  padding: 13px 20px;
  text-decoration: none;
  opacity: 0.7;
  cursor: pointer;
  right: 0;
  top: 0;
  position: absolute;
  @media (max-width: 768px) {
    background-image: url(${Reset});
    background-repeat: no-repeat;
    color: transparent;
    background-size: 40px;
    background-position-x: 45px;
    color: transparent;
    padding: 13px 20px;
  }
`;
export const Select = styled.select`
  border: none;
  background-color: white;
  font-size: 1.1rem;
  cursor: pointer;
  margin-right: 5px;
  &:focus {  
    border-color: #fea;
    box-shadow: 0 0 0 2px #9f8fff;
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
