import React, { useEffect } from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IUpdateTask } from "../../types/typesInterface";
import PutTask from "../../components/putTask";

export const SingleTask = () => {
  const { id } = useParams();
  const [tasks, setTasks] = React.useState<IUpdateTask>({} as IUpdateTask);
  const [reload, setReload] = React.useState(false);

  useEffect(() => {
    if(!id) return;
    api.getSingleTask(+id).then((response) => {
       setTasks(response);
    });
  }, [reload]);
 
  return (
      <S.Container>
        <S.Title>Edit Task</S.Title>
        <PutTask tasksUpdate={tasks} setReload={setReload} reload={reload}/>
      </S.Container>
  );
};
