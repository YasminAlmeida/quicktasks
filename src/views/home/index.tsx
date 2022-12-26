import React, { useEffect } from "react";
import * as S from "./styles";

import Tasks from "../../components/tasks";
import Filter from "../../components/filter";
import PostTask from "../../components/postTask";

import { IResponseTask } from "../../types/typesInterface";
import { ICreateTask } from "../../types/typesInterface";
import { api } from "../../services/api";

const Home = () => {
  const [tasks, setTasks] = React.useState<IResponseTask[]>([]);
  const [filterType, setFilterType] = React.useState("none");
  const [filterValue, setFilterValue] = React.useState("none");
  const [tasksCreate, setTaskstasksCreate] = React.useState<ICreateTask>({} as ICreateTask);
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    if (filterType === "none") {
      api.getTasks().then((response) => {
        setTasks(response);
      });
    } else if (filterType === "users") {
      api.getTaskByUser(+filterValue).then((response) => {
        setTasks(response);
      });
    } else if (filterType === "status") {
      api.getTaskByStatus(+filterValue).then((response) => {
        setTasks(response);
      });
    } else if (filterType === "priority") {
      api.getTaskByPriority(+filterValue).then((response) => {
        setTasks(response);
      });
    }
  };

  const ResetTheFilter = () => {
    setFilterType("none");
    setFilterValue("none");
    api.getTasks().then((response) => {
      setTasks(response);
    });
  }

  return (
    <S.HomeContainer>
      <S.ContainerTop>
        <PostTask tasksCreated={tasksCreate} />
        <Filter
          filterType={filterType}
          setFilterType={setFilterType}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          handleSearch={handleSearch}
          ResetTheFilter={ResetTheFilter}
        />        
      </S.ContainerTop> 
      <Tasks tasks={tasks} />
    </S.HomeContainer>
  );
};

export default Home;
