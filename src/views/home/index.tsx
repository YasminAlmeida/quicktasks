import React, { useEffect, useState } from "react";
import * as S from "./styles";

import Tasks from "../../components/tasks";
import Filter from "../../components/filter";
import PostTask from "../../components/postTask";
import Loading from "../../components/loading";

import { IResponseTask } from "../../types/typesInterface";
import { ICreateTask } from "../../types/typesInterface";
import { api, IParams } from "../../services/api";

const Home = () => {
  const [tasks, setTasks] = useState<IResponseTask[]>([]);
  const [filterType, setFilterType] = useState("none");
  const [tasksCreate, setTaskstasksCreate] = useState<ICreateTask>({} as ICreateTask);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [params, setParams] = useState<IParams>({} as IParams);
  const [search, setSearch] = useState<IResponseTask[]>([]);


  useEffect(() => {
    setLoading(true);
    getSearch()
  }, [params, reload]);

  async function getSearch() {
    setLoading(true);
    try {
      const res = await api.getByUserAndStatusAndPriorityAndCategory(params);
      setTasks(res);
      setLoading(false);

    }
    catch (err) {
      console.log(err);
      setLoading(true);
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
          reload={reload} />
        <Filter
          params={params}
          setParams={setParams}
          filterType={filterType}
          setFilterType={setFilterType}
          ResetTheFilter={ResetTheFilter}
          responseTask={search} />
      </S.ContainerTop>
      {!loading && (
        <Tasks
          tasks={tasks}
          setReload={setReload}
          reload={reload} />
      )}
      {loading && <Loading />}
      {tasks.length === 0 && !loading && (
        <S.COntainerNotFOund>
          <h1>No Resoults Found</h1>
        </S.COntainerNotFOund>
      )}
    </S.HomeContainer>
  );
};

export default Home;