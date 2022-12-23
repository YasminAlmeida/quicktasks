import React, { useEffect } from "react";
import * as S from "./styles";

import Tasks from "../../components/tasks";
import Filter from "../../components/filter";

import { IResponseTask } from "../../types/typesInterface";
import { api } from "../../services/api";

const Home = () => {
  const [tasks, setTasks] = React.useState<IResponseTask[]>([]);
  const [filterType, setFilterType] = React.useState("none");
  const [filterValue, setFilterValue] = React.useState("none");

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
      <Filter
        filterType={filterType}
        setFilterType={setFilterType}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        handleSearch={handleSearch}
        ResetTheFilter={ResetTheFilter}
      />
      <Tasks tasks={tasks} />
    </S.HomeContainer>
  );
};

export default Home;
