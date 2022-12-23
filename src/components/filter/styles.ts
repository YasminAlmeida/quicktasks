import styled from "styled-components";
import Searchicon from "../../assets/search.png";

export const COntainerFilter = styled.section`
  align-items: center;
  margin: 0 auto 0;
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 80%;
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
  position: absolute;
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
`;
