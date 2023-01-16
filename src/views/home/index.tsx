import React, { useEffect, useState } from "react";
import * as S from "./styles";

import Tasks from "../../components/tasks";
import Filter from "../../components/filter";
import PostTask from "../../components/postTask";
import Loading from "../../components/loading";

import { IResponseTask } from "../../types/typesInterface";
import { ICreateTask } from "../../types/typesInterface";
import { api, IParams } from "../../services/api";
import Pagination from "../../components/pagination";

const Home = () => {
  const [tasks, setTasks] = useState<IResponseTask[]>([]);
  const [filterType, setFilterType] = useState("none");
  const [tasksCreate, setTaskstasksCreate] = useState<ICreateTask>({} as ICreateTask);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState<IResponseTask[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [params, setParams] = useState<IParams>({
    page: page,
    limit: 9,
  } as IParams);
  useEffect(() => {
    setLoading(true);
    getSearch();
    setTotalPages(totalPages);
  }, [params, reload, page]);

  useEffect(() => {
    setLoading(true);
    getSearch()
  }, [params, reload]);

  async function getSearch() {
    setLoading(true);
    try {
      const res = await api.getByUserAndStatusAndPriorityAndCategory({
        ...params,
        page,
        limit: 9,
      });
      setTasks(res.content);
      if(res.content.length > 0){
        setTotalPages(totalPages);
        setPage(page);
      }
      if (totalPages) {
        setTotalPages(res.totalPages);
      }
      setTotalPages(res.totalPages);
      if (page) {
        setPage(page);
      }
      setLoading(false);
    } catch (err) {
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
        <>
          <Tasks tasks={tasks} 
          setReload={setReload} 
          reload={reload}
          />
          {totalPages > 1 && (
            <Pagination  
              totalPages={totalPages}
              page={page}
              setPage={setPage}
            />
          )}
        </>
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