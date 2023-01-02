import React, { useEffect } from "react";
import * as S from "./styles";

import Tasks from "../../components/tasks";
import Filter from "../../components/filter";
import PostTask from "../../components/postTask";
import Loading from "../../components/loading";

import { IResponseTask } from "../../types/typesInterface";
import { ICreateTask } from "../../types/typesInterface";
import { api, IParams } from "../../services/api";

const Home = () => {
  const [tasks, setTasks] = React.useState<IResponseTask[]>([]);
  const [filterType, setFilterType] = React.useState("none");
  const [tasksCreate, setTaskstasksCreate] = React.useState<ICreateTask>({} as ICreateTask);
  const [loading, setLoading] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [params, setParams] = React.useState<IParams>({} as IParams);  
  const [search, setSearch] = React.useState<IResponseTask[]>([]);
  
  
  useEffect(() => {
    setLoading(true);
    getSearch()
  }, [params]);

  async function getSearch(){
    setLoading(true);
    console.log(params)
    try{
      const res = await api.getByUserAndStatusAndPriorityAndCategory(params);
      setTasks(res);
      setLoading(false);
      
    }
    catch(err){
      console.log(err);
      setLoading(false);
    }
  }
  const ResetTheFilter = () => {
    setParams({} as IParams);
  }

  return (
    <S.HomeContainer>
      <S.ContainerTop>
        <PostTask 
          tasksCreated={tasksCreate} 
          setReload={setReload} 
          reload={reload}/>
        <Filter
          params={params}
          setParams={setParams}
          filterType={filterType}
          setFilterType={setFilterType}
          ResetTheFilter={ResetTheFilter}
          responseTask={search}/>
      </S.ContainerTop>  
      {!loading && (
        <Tasks tasks={tasks} />
      )}
      {loading && <Loading />}
    </S.HomeContainer>
  );
};

export default Home;