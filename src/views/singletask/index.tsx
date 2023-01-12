import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IUpdateTask } from "../../types/typesInterface";
import PutTask from "../../components/putTask";
import Arrow from "../../assets/arrow.png";

export const SingleTask = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState<IUpdateTask>({} as IUpdateTask);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(!id) return;
    api.getSingleTask(+id).then((response) => {
       setTasks(response);
    });
  }, [reload]);
 
  return (
      <S.Container>
        <S.Arrow src={Arrow} alt="" onClick={() => navigate(`/`)} />
        <S.Title>Edit Task</S.Title>
        <PutTask tasksUpdate={tasks} setReload={setReload} reload={reload}/>
      </S.Container>
  );
};
