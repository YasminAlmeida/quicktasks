import styled from "styled-components";

export const COntainerFilter = styled.section`
  width: 100%;
  margin-left: 100px;
  display: flex;
  align-items: center;
`
export const Select = styled.select`
  height: 40px;
  width: 100%;
  margin-top: 5px;
  border: 0;
`
export const Input = styled.input`
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 100%;
  }
`