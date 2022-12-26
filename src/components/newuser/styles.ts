import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0 5px 5px 0;
  background: #ffffff;
  max-width: 1360px;
  margin: 0 auto 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
export const Form = styled.form`
  display: grid;  
  grid-template-columns: 1fr;
  width: 80%;
  gap: 20px;
`;
export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;
export const Input = styled.input`
  width: 100%;
  height: 15px;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  &:focus {  
    border-color: #fea;
    box-shadow: 0 0 0 2px #9f8fff;
    outline: none;
  }
`;
export const Select = styled.select`
  background: #f7f7f7;
  border: 1px solid #ededed;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  option{
    font-size: 1.008rem;
  }
  &:focus {  
    border-color: #fea;
    box-shadow: 0 0 0 2px #9f8fff;
    outline: none;
  }
`;
export const BtnSubmit = styled.button`
  background: linear-gradient(90deg, #9f8fff 100%, #7b68ee 0);
  border: none;
  color: #000000;
  font-size: 1.008rem;
  padding: 7px 5px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1rem;
  margin-top: 20px;
`;
export const Pages = styled.p`
  margin: 20px;
  font-size: 1.3rem;
  padding: 4px;
  &:hover,
  &:focus {
    background: #c2c2c2;
    cursor: pointer;
    border-radius: 4px;
    
  }
`;
export const List = styled.div`
`;

export const ContainerItems = styled.div`
  margin: 20px;
`;

export const Item = styled.p`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;
