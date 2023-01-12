import styled from "styled-components";

export const TooltipText = styled.div`
  background: #9f8fff;
  width: 50px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    line-height: 40px;
    font-size: 1.2rem;
    width: 40px;
    margin-bottom: 45px;
  }
`;
export const TooltipBox = styled.div`
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  color: white;
  p {
    color: #fff;
  }
  @media (max-width: 600px) {
    width: 50px;  
    margin-top: -10px;
  }
`;
export const TooltipCard = styled.button`
  margin: 10px 0px -20px;
  cursor: 0;
  background-color: none;
  background: none;
  border: 0;
  height: 50px;
  width: 50px;
  margin-top: 15px;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 150px;
    padding: 8px 8px;
    border-radius: 4px;
    padding: 4px 0px;
    width: 50px;
  }
  @media (max-width: 600px) {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0px 0px 50px;
    flex-direction: column-reverse; 
    align-items: flex-start;
    justify-content: flex-end;
  }     

`;
export const ContainerModal = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 660px;
  border: 10px solid #bed4ff;
  box-shadow: 0 0 0 5px #9f8fff;
  position: relative;
  opacity: 1;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 660px;
  }
`;
export const BtnModal = styled.button`
  background: linear-gradient(90deg, #9f8fff 100%, #7b68ee 0);
  border: none;
  color: #000000;
  font-size: 1.008rem;
  border-radius: 50%;
  padding: 10px 15px;
  position: absolute;
  right: 0;
  top: 0;
  margin: -25px;
  cursor: pointer;
`
export const Form = styled.form`
  display: grid;  
  margin-top: 50px;
  grid-template-columns: 1fr;
  width: 80%;
  gap: 20px;
`;
export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputDescription = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
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
  padding: 10px 10px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1rem;
`;
export const Label = styled.label`
  display: block;
  font: 400 1rem/1.5 "Poppins", sans-serif;
  margin-bottom: 4px;
  margin: 8px 0 8px;
`;
export const BtnUser = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  background: none;
  cursor: pointer;
  padding: 2px;
  margin: 5px 0;
  &:focus, &:hover {
    border-color: #fea;
    box-shadow: 0 0 0 2px #9f8fff;
    outline: none;
  }
`