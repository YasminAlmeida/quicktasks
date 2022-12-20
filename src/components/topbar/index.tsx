import React from 'react';
import * as S from './styles';

import Filter from "../filter";
const TopBar = () => {
  return(
    <S.SidebarContainer>
      <h1>QuickTasks</h1>
      <Filter/>
    </S.SidebarContainer>
  )
}

export default TopBar;