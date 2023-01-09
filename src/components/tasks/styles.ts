import styled from "styled-components";

export const SectionContainerTask = styled.section`
  margin: 0 auto 0;
  margin-top: 50px;
  max-width: 1360px;
  @media(max-width: 782px) {
    margin-top: 10px;
  }
`;
export const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-items: center;
  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
  }
`;
export const StatusTask = styled.p`
  margin: 0 auto 0;
`;
export const ContainersTasks = styled.div`
  background: #fff;
  box-shadow: 0 10px 30px rgb(16 30 54 / 10%);
  border-radius: 4px;
  padding: 20px 60px;
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
  @media (max-width: 1360px) {
    margin: 0 auto 0;
    width: 90%;
  }
`;
export const LeftContainer = styled.div`
  margin-right: 15px;
  display: contents;
`;
export const TextStatus = styled.p`
  color: ${({ color }) => color};
  background: ${({ color }) => (color = "#fbfbfb")};
  width: max-content;
  padding-bottom: 5px;
  border-radius: 4px;
`;
export const NameCategory = styled.span`
  color: #b2b2b2;
  background-color: #fff;
  font-size: 1rem;
`;
export const Btn = styled.button`
  border: 0;
  box-shadow: 0 10px 30px rgb(16 30 54 / 10%);
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
 
  img {
    height: 50px;
    width: 50px;
  }
`;
export const ContainerAbsolut = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  left: 0;
  @media (max-width: 480px) {
    top: 0;
    width: 15px;
    height: 15px;
  }
`;
