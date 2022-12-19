import React from 'react';

import * as S from './styles';
import SideBar from "../../components/sidebar";
import Tasks from "../../components/tasks";

const Home = () => {
  return(
    <S.HomeContainer>
      <SideBar/>
      <Tasks/>
    </S.HomeContainer>
  )
}

export default Home;