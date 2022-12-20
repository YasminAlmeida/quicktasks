import styled from "styled-components"

export const SidebarContainer = styled.section`
  max-width: 1300px;;
  position: relative;   
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    width: 4px;
    height: 100%;
    background: linear-gradient(90deg,#9f8fff 100%,#7b68ee 0);
  }
`;