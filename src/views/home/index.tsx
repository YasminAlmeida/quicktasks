import React, {useEffect} from 'react';
import * as S from './styles';

import TopBar from "../../components/topbar";
import Tasks from "../../components/tasks";

import { IResponseTask } from '../../types/typesInterface';
import { api } from '../../services/api';

const Home = () => {
  const [tasks, setTasks] = React.useState<IResponseTask[]>([]);
  useEffect(() => {
    api.getTasks().then((response) => {
      setTasks(response.data);
  })}, [])


  return(
    <S.HomeContainer>
      <TopBar/>
      <Tasks tasks={tasks}/>
    </S.HomeContainer>
  )
}

export default Home;